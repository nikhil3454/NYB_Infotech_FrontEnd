import { createContext, useContext, useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./store";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./counterSlice";

const ThemeContext = createContext();
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}

// Colors for each theme
const themeStyles = {
  light: { background: "#ffffff", color: "#111111" },
  dark: { background: "#1e1e1e", color: "#f5f5f5" },
};
function ContextAPI() {
  return (
    <Provider store={store}>
    <ThemeProvider>
      <PropDrilling />
    </ThemeProvider>
    </Provider>
  );
}
function PropDrilling() {
  const [count, setCount] = useState(0);
  const { theme } = useTheme(); // read theme directly, no props needed

  const user = {
    name: "Nikhil",
    role: "Associate Software Engineer",
  };

  return (
    <div
      style={{
        ...themeStyles[theme],
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1>Props Drilling + Context API Theme</h1>

      {/* Theme toggle uses Context, nothing is passed as a prop */}
      <ThemeToggleButton />

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      {/* user and count are drilled through props */}
      <Parent user={user} count={count} />
      <ReduxCounter />
    </div>
  );
}
// Theme toggle button: consumes context directly
function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        margin: "10px 0",
        padding: "8px 16px",
        cursor: "pointer",
        borderRadius: "6px",
        border: "1px solid gray",
        background: theme === "light" ? "#222" : "#eee",
        color: theme === "light" ? "#fff" : "#000",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

// Level 1: passes user and count down as props
function Parent({ user, count }) {
  const { theme } = useTheme();

  return (
    <div
      style={{
        ...themeStyles[theme],
        border: "2px solid blue",
        padding: "15px",
        marginTop: "10px",
      }}
    >
      <h2>Parent Component</h2>
      <Child user={user} count={count} />
    </div>
  );
}

// Level 2: passes user and count down as props
function Child({ user, count }) {
  const { theme } = useTheme();

  return (
    <div
      style={{
        ...themeStyles[theme],
        border: "2px solid green",
        padding: "15px",
        marginTop: "10px",
      }}
    >
      <h2>Child Component</h2>
      <GrandChild user={user} count={count} />
    </div>
  );
}

// Level 3: uses user and count (from props) and theme (from context)
function GrandChild({ user, count }) {
  const { theme } = useTheme();

  return (
    <div
      style={{
        ...themeStyles[theme],
        border: "2px solid red",
        padding: "15px",
        marginTop: "10px",
      }}
    >
      <h2>GrandChild Component</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
      <p>
        <strong>Count from top:</strong> {count}
      </p>
      <p>
        <strong>Current theme:</strong> {theme}
      </p>
    </div>
  );
}
function ReduxCounter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const [amount, setAmount] = useState(5);

  return (
    <div
      style={{
        ...themeStyles[theme],
        border: "2px solid purple",
        padding: "15px",
        marginTop: "20px",
      }}
    >
      <h2>Redux Counter</h2>
      <h3>Count: {count}</h3>

      <button onClick={() => dispatch(increment())}>+1</button>{" "}
      <button onClick={() => dispatch(decrement())}>-1</button>{" "}
      <button onClick={() => dispatch(reset())}>Reset</button>

      <div style={{ marginTop: "10px" }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "70px", marginRight: "8px" }}
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}

export default ContextAPI;