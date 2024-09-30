import React from "react";
import ReactDOM from "react-dom/client"; // Ensure this line is correct
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Assuming you have a <div id="root"></div> in your HTML
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
