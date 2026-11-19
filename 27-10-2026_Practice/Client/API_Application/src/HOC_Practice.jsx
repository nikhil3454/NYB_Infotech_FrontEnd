
import React, { useState } from "react";

// A HOC is a function that takes a component
// as an argument and returns a new component.

function withAuthentication(WrappedComponent) {

  return function AuthenticatedComponent(props) {

    const isAuthenticated = props.isAuthenticated;

    // Check authentication
    if (!isAuthenticated) {
      return (
        <div style={styles.denied}>
          <h2>Access Denied!</h2>
          <p>Please login to access this page.</p>
        </div>
      );
    }

    // If authenticated, render original component
    return <WrappedComponent {...props} />;
  };
}
function withAuthorization(WrappedComponent) {

  return function AuthorizedComponent(props) {

    if (props.role !== "admin") {
      return (
        <div style={styles.denied}>
          <h2>Unauthorized Access!</h2>
          <p>Only administrators can access this section.</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}

function Dashboard({ username }) {

  return (
    <div style={styles.card}>
      <h2>Dashboard</h2>
      <h3>Welcome, {username}!</h3>
      <p>You have successfully accessed the dashboard.</p>
    </div>
  );
}

function AdminPanel({ username }) {

  return (
    <div style={styles.card}>
      <h2>Admin Panel</h2>
      <h3>Welcome Admin: {username}</h3>
      <p>You have permission to manage users.</p>
    </div>
  );
}
// Authentication HOC
const ProtectedDashboard = withAuthentication(Dashboard);

// Authorization HOC
const ProtectedAdminPanel = withAuthorization(AdminPanel);

// Combining two HOCs
const SecureAdminPanel = withAuthentication(
  withAuthorization(AdminPanel)
);

function HOC() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [username, setUsername] = useState("Nikhil");

  const [role, setRole] = useState("user");

  return (
    <div style={styles.container}>

      <h1>Higher Order Components (HOC)</h1>

      <p>Learn reusable components using HOCs.</p>

      {/* LOGIN / LOGOUT */}

      <div style={styles.card}>

        <h2>Authentication Controls</h2>

        <p>
          Login Status:{" "}
          <strong>
            {isAuthenticated ? "Logged In" : "Logged Out"}
          </strong>
        </p>

        <button
          onClick={() => setIsAuthenticated(!isAuthenticated)}
          style={styles.button}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>

        <br /><br />

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          style={styles.input}
        />

      </div>

      {/* ROLE SELECTION */}

      <div style={styles.card}>

        <h2>User Role</h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.input}
        >
          <option value="user">Normal User</option>
          <option value="admin">Admin</option>
        </select>

        <p>Current Role: {role}</p>

      </div>

      {/* AUTHENTICATION HOC */}

      <h2>Example 1: Authentication HOC</h2>

      <ProtectedDashboard
        isAuthenticated={isAuthenticated}
        username={username}
      />

      {/* AUTHORIZATION HOC */}

      <h2>Example 2: Authorization HOC</h2>

      <ProtectedAdminPanel
        role={role}
        username={username}
      />

      {/* COMBINED HOC */}

      <h2>Example 3: Authentication + Authorization HOC</h2>

      <SecureAdminPanel
        isAuthenticated={isAuthenticated}
        role={role}
        username={username}
      />

    </div>
  );
}

// ============================================
// 6. CSS STYLES
// ============================================

const styles = {

  container: {
    padding: "30px",
    fontFamily: "Arial",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh"
  },

  card: {
    backgroundColor: "white",
    padding: "20px",
    margin: "15px 0",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },

  denied: {
    backgroundColor: "#ffe5e5",
    color: "#cc0000",
    padding: "20px",
    margin: "15px 0",
    borderRadius: "10px"
  },

  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  input: {
    padding: "10px",
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "5px"
  }

};

export default HOC;
