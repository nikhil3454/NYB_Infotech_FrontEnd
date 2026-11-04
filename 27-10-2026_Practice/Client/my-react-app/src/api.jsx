
import { useEffect, useState } from "react";
import "./Api.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function Api() {
  // API data and request states
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Form data
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const [editingId, setEditingId] = useState(null);

  // Common function for sending HTTP requests
  async function apiRequest(url, options = {}) {
    const response = await fetch(url, options);

    // Fetch does not automatically reject on HTTP 4xx/5xx
    if (!response.ok) {
      throw new Error(
        `Request failed: ${response.status} ${response.statusText}`
      );
    }

    // Some successful responses have no body
    if (response.status === 204) {
      return null;
    }

    const text = await response.text();
    return text ? JSON.parse(text) : null;
  }

  // GET: Fetch employees from the public REST API
  async function fetchEmployees() {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const data = await apiRequest(API_URL);

      if (!Array.isArray(data)) {
        throw new Error("Invalid employee data received.");
      }
      

      setEmployees(data);
    } catch (err) {
      setError(err.message || "Unable to fetch employees.");
    } finally {
      setLoading(false);
    }
  }

  // Fetch data when the component mounts
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Handle form input changes
  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  // Reset the form
  function resetForm() {
    setForm({ name: "", email: "" });
    setEditingId(null);
  }

  // POST: Create an employee
  // PUT: Replace the editable employee fields
  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setMessage("");

    const payload = {
      name: form.name.trim(),
      email: form.email.trim()
    };

    if (!payload.name || !payload.email) {
      setError("Name and email are required.");
      return;
    }

    setSubmitting(true);

    try {
      if (editingId === null) {
        // POST request
        const created = await apiRequest(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        // Keep the new record visible in local React state.
        // JSONPlaceholder does not permanently store new records.
        const newEmployee = {
          ...payload,
          id: `local-${Date.now()}`
        };

        setEmployees((previous) => [
          newEmployee,
          ...previous
        ]);

        setMessage(
          `POST successful. Server returned ID: ${created?.id ?? "N/A"}.`
        );
      } else {
        // PUT request: send the full updated employee representation.
        const existingEmployee = employees.find(
          (employee) => employee.id === editingId
        );

        const updatedEmployee = {
          ...existingEmployee,
          ...payload
        };

        const result = await apiRequest(
          `${API_URL}/${editingId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEmployee)
          }
        );

        setEmployees((previous) =>
          previous.map((employee) =>
            employee.id === editingId
              ? { ...employee, ...payload }
              : employee
          )
        );

        setMessage(
          `PUT successful. Server response received${
            result ? "." : " with no body."
          }`
        );
      }

      resetForm();
    } catch (err) {
      setError(err.message || "Unable to save employee.");
    } finally {
      setSubmitting(false);
    }
  }

  // Select an employee to edit
  function handleEdit(employee) {
    setEditingId(employee.id);

    setForm({
      name: employee.name ?? "",
      email: employee.email ?? ""
    });

    setError("");
    setMessage("");
  }

  // PATCH: Update only the employee's email
  async function handlePatch(employee) {
    const newEmail = window.prompt(
      `Enter a new email for ${employee.name}:`,
      employee.email
    );

    if (newEmail === null) return;

    if (!newEmail.trim()) {
      setError("Email cannot be empty.");
      return;
    }

    setError("");
    setMessage("");

    try {
      const result = await apiRequest(
        `${API_URL}/${employee.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: newEmail.trim()
          })
        }
      );

      // Update only the matching employee in React state.
      setEmployees((previous) =>
        previous.map((item) =>
          item.id === employee.id
            ? {
                ...item,
                email: result?.email ?? newEmail.trim()
              }
            : item
        )
      );

      setMessage("PATCH successful. Email updated.");
    } catch (err) {
      setError(err.message || "Unable to update email.");
    }
  }

  // DELETE: Remove an employee
  async function handleDelete(employee) {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${employee.name}?`
    );

    if (!confirmed) return;

    setError("");
    setMessage("");

    try {
      await apiRequest(`${API_URL}/${employee.id}`, {
        method: "DELETE"
      });

      // Remove the employee only after the request succeeds.
      setEmployees((previous) =>
        previous.filter((item) => item.id !== employee.id)
      );

      if (editingId === employee.id) {
        resetForm();
      }

      setMessage("DELETE successful. Employee removed from the UI.");
    } catch (err) {
      setError(err.message || "Unable to delete employee.");
    }
  }

  return (
    <main className="container">
      <header>
        <h1>Employee Management</h1>
        <p>
          React + Public REST API + Fetch + Async/Await
        </p>
      </header>

      <section className="panel">
        <h2>
          {editingId === null
            ? "Create Employee (POST)"
            : "Edit Employee"}
        </h2>

        <form onSubmit={handleSubmit} className="employee-form">
          <label>
            Employee Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter employee name"
              required
            />
          </label>

          <label>
            Email Address
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
            />
          </label>

          <div className="form-actions">
            <button type="submit" disabled={submitting}>
              {submitting
                ? "Saving..."
                : editingId === null
                  ? "Create Employee (POST)"
                  : "Save Changes (PUT)"}
            </button>

            {editingId !== null && (
              <button
                type="button"
                className="secondary"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="panel">
        <div className="list-header">
          <h2>Employee List (GET)</h2>

          <button
            type="button"
            onClick={fetchEmployees}
            disabled={loading}
          >
            {loading ? "Loading..." : "Refresh Data"}
          </button>
        </div>

        {error && (
          <p className="error" role="alert">
            {error}
          </p>
        )}

        {message && (
          <p className="success" role="status">
            {message}
          </p>
        )}

        {loading ? (
          <p role="status">Loading employees from the API...</p>
        ) : employees.length === 0 ? (
          <p>No employees found. Create an employee to begin.</p>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Operations</th>
                </tr>
              </thead>

              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>
                      <div className="actions">
                        <button
                          type="button"
                          onClick={() => handleEdit(employee)}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="patch-button"
                          onClick={() => handlePatch(employee)}
                        >
                          PATCH Email
                        </button>

                        <button
                          type="button"
                          className="delete-button"
                          onClick={() => handleDelete(employee)}
                        >
                          DELETE
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="count">
          Total employees: {employees.length}
        </p>
      </section>
    </main>
  );
}

export default Api;
