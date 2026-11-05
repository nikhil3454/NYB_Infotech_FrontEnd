import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {Axios_Practice_get, AddUser} from "./Axios_Practice.jsx";
import axios from "axios";

// Find the root element in index.html
const container = document.getElementById("root");

// Create a React root
const root = createRoot(container);

// Render the App component
root.render(
  <StrictMode>
    <Axios_Practice_get />
    <AddUser />
  </StrictMode>
);