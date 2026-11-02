import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import Api from "./api.jsx";
import Practice from "./Practice.jsx";

// Find the root element in index.html
const container = document.getElementById("root");

// Create a React root
const root = createRoot(container);

// Render the App component
root.render(
  <StrictMode>
    <Practice/>
    </StrictMode>
);