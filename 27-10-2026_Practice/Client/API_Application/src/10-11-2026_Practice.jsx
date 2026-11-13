import { createContext, useContext, useState, useEffect, useMemo } from "react";

/* ============================================================
   1. THEME CONTEXT
   ============================================================ */
const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.dataset.theme = theme; // CSS reads this attribute
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // useMemo keeps the value object stable, so consumers
  // don't re-render unless theme actually changes
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}

/* ============================================================
   2. AUTH CONTEXT
   ============================================================ */
const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // Fake login for the assignment (no backend). Password is "1234".
  const login = (username, password) => {
    if (username.trim() && password === "1234") {
      const loggedInUser = { name: username.trim() };
      setUser(loggedInUser);
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      return { success: true };
    }
    return { success: false, message: "Invalid username or password" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

/* ============================================================
   3. COMPONENTS
   ============================================================ */
function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2>Context Demo</h2>
      <div>
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        {user && (
          <>
            <span className="user">Hi, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(username, password);
    if (!result.success) setError(result.message);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password (use 1234)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

function Dashboard() {
  const { user } = useAuth();
  const { theme } = useTheme();

  return (
    <div className="card">
      <h3>Welcome, {user.name}! 🎉</h3>
      <p>
        Current theme: <b>{theme}</b>
      </p>
      <p>This page read both contexts directly, with no props passed.</p>
    </div>
  );
}

/* ============================================================
   4. STYLES (injected so everything stays in one file)
   ============================================================ */
const styles = `
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  transition: background 0.3s, color 0.3s;
}
body[data-theme="light"] { background: #f5f5f5; color: #222; }
body[data-theme="dark"]  { background: #1a1a1a; color: #eee; }

.navbar {
  display: flex; justify-content: space-between; align-items: center;
  padding: 12px 24px; border-bottom: 1px solid #8884;
}
.navbar h2 { margin: 0; }
.navbar button { margin-left: 10px; cursor: pointer; }
.user { margin-left: 14px; }

main { display: flex; justify-content: center; padding: 40px 16px; }
.card {
  display: flex; flex-direction: column; gap: 10px;
  width: 320px; padding: 24px; border-radius: 10px;
  background: #8881; border: 1px solid #8884;
}
.card h3 { margin: 0; }
.card input { padding: 8px; border-radius: 6px; border: 1px solid #8886; }
.card button { padding: 8px; cursor: pointer; }
.error { color: #e03131; margin: 0; }
`;

/* ============================================================
   5. APP (consumes AuthContext, so it sits inside the providers)
   ============================================================ */
function AppContent() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <main>{user ? <Dashboard /> : <Login />}</main>
    </>
  );
}

// Default export wraps everything in the providers,
// so main.jsx doesn't need to change.
export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <style>{styles}</style>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}