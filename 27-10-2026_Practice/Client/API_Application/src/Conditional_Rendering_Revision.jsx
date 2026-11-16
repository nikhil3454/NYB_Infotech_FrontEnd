
import React, { useState } from "react";
import "./App.css";

// --------------------------------
// 1. Login Component
// --------------------------------
function Login({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState("User");

  return (
    <div className="login-box">
      <h2>User Login</h2>

      <label>Select Your Role:</label>

      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        <option value="Admin">Admin</option>
        <option value="Manager">Manager</option>
        <option value="User">User</option>
      </select>

      <button onClick={() => onLogin(selectedRole)}>
        Login
      </button>
    </div>
  );
}

// --------------------------------
// 2. Navbar Component
// --------------------------------
function Navbar({ username, onLogout }) {
  return (
    <nav className="navbar">
      <h2>React Dashboard</h2>

      <div>
        <span>Welcome, {username}</span>
        <button onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
}

// --------------------------------
// 3. Admin Dashboard
// --------------------------------
function AdminDashboard({ users, clearUsers }) {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <p>Admin can manage all users.</p>

      <h3>User List</h3>

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <EmptyState message="No users available." />
      )}

      <button onClick={clearUsers}>
        Clear All Users
      </button>
    </div>
  );
}

// --------------------------------
// 4. Manager Dashboard
// --------------------------------
function ManagerDashboard() {
  return (
    <div className="dashboard">
      <h2>Manager Dashboard</h2>
      <p>Manager can manage team activities.</p>
      <button>View Team</button>
    </div>
  );
}

// --------------------------------
// 5. User Dashboard
// --------------------------------
function UserDashboard() {
  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      <p>Welcome! You can view your profile.</p>
      <button>View Profile</button>
    </div>
  );
}

// --------------------------------
// 6. Loading Component
// --------------------------------
function Loading() {
  return (
    <div className="loading">
      <h2>Loading...</h2>
      <p>Please wait while data is loading.</p>
    </div>
  );
}

// --------------------------------
// 7. Empty State Component
// --------------------------------
function EmptyState({ message }) {
  return (
    <div className="empty-state">
      <h3>No Data Found</h3>
      <p>{message}</p>
    </div>
  );
}

// --------------------------------
// 8. Main App Component
// --------------------------------
function ConditionalRenderingApp() {

  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // User role state
  const [role, setRole] = useState("");

  // Loading state
  const [loading, setLoading] = useState(false);

  // Show / Hide component state
  const [showMessage, setShowMessage] = useState(true);

  // User data state
  const [users, setUsers] = useState([
    { id: 1, name: "Nikhil" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Kiran" }
  ]);

  // --------------------------------
  // Login Function
  // --------------------------------
  function handleLogin(selectedRole) {
    setRole(selectedRole);
    setIsLoggedIn(true);
  }

  // --------------------------------
  // Logout Function
  // --------------------------------
  function handleLogout() {
    setIsLoggedIn(false);
    setRole("");
  }

  // --------------------------------
  // IF-ELSE CONDITIONAL RENDERING
  // --------------------------------
  function checkAuthentication() {
    if (isLoggedIn) {
      return <h2>You are successfully authenticated!</h2>;
    } else {
      return <h2>Please login to continue.</h2>;
    }
  }

  // --------------------------------
  // SWITCH CASE ROLE RENDERING
  // --------------------------------
  function renderDashboard() {

    switch (role) {
      case "Admin":
        return (
          <AdminDashboard
            users={users}
            clearUsers={() => setUsers([])}
          />
        );

      case "Manager":
        return <ManagerDashboard />;

      case "User":
        return <UserDashboard />;

      default:
        return <EmptyState message="Invalid user role." />;
    }
  }

  // --------------------------------
  // LOADING FUNCTION
  // --------------------------------
  function loadData() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  // --------------------------------
  // MAIN JSX
  // --------------------------------
  return (
    <div className="app">

      <h1>Conditional Rendering in React</h1>

      {/* TERNARY OPERATOR */}
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Navbar
            username={role}
            onLogout={handleLogout}
          />

          {/* IF-ELSE */}
          <div className="auth-status">
            {checkAuthentication()}
          </div>

          {/* SWITCH CASE */}
          {renderDashboard()}

          {/* LOGICAL AND OPERATOR */}
          {isLoggedIn && (
            <div className="message">
              <h3>Logical AND Example</h3>
              <p>You are logged in. This message is visible.</p>
            </div>
          )}

          {/* SHOW / HIDE COMPONENT */}
          <button
            onClick={() => setShowMessage(!showMessage)}
          >
            {showMessage ? "Hide Message" : "Show Message"}
          </button>

          {showMessage && (
            <div className="message">
              <h3>Dynamic Show and Hide</h3>
              <p>This component can be shown or hidden.</p>
            </div>
          )}

          {/* LOADING STATE */}
          <div className="loading-section">

            <h3>Loading State Example</h3>

            <button onClick={loadData} disabled={loading}>
              {loading ? "Loading..." : "Load Data"}
            </button>

            {loading ? (
              <Loading />
            ) : (
              <p>Data loading completed!</p>
            )}

          </div>

        </>
      )}

    </div>
  );
}

export default ConditionalRenderingApp;
