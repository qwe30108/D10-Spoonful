import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import feather from "feather-icons";
import "./assets/css/utils/all.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Initialize feather icons after render
setTimeout(() => {
  feather.replace();
}, 0);
