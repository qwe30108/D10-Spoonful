import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import feather from "feather-icons";
import "./assets/css/utils/all.scss";
import App from "./App.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { store } from "./store/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
);

// Initialize feather icons after render
setTimeout(() => {
  feather.replace();
}, 0);
