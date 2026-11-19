import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {store} from "./store";
import App from "./App.jsx";
import "./index.css";
import {Axios_Practice_get, AddUser} from "./Axios_Practice.jsx";
import axios from "axios";
import ContextAPI from "./Context_and_Redux _revision.jsx";
import { Provider } from "react-redux";
import ReducerPractice from "./reducer_Practice.jsx";
import ConditionalRenderingApp from "./Conditional_Rendering_Revision.jsx";
import UseEffect_and_API_revision from "./UseEffect_and_API_revision.jsx";
import DynamicForm from "./Forms_revision.jsx";
import HOC from "./HOC_Practice.jsx";


// Find the root element in index.html
const container = document.getElementById("root");

// Create a React root
const root = createRoot(container);

// Render the App component
root.render(
  <StrictMode>
    <HOC />
  </StrictMode>
);