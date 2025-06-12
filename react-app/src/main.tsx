// @ts-ignore
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";

const root = document.getElementById("root");

if (root) {
    ReactDOM.createRoot(root).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
} else {
    throw new Error('Root element not found');
}
