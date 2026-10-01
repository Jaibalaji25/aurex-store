import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";
import { ShopProvider } from "./context/ShopContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ShopProvider>
        <App />
        <ToastContainer position="bottom-right" autoClose={2500} theme="dark" />
      </ShopProvider>
    </BrowserRouter>
  </StrictMode>,
);
