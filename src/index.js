import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
document.title = "IOS Calculator";

const metaDescription = document.createElement("meta");
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = "/favicon.ico";
metaDescription.name = "My Pratice React Code: IOS Calculator";
metaDescription.content = "Made by Damocloids";
document.head.appendChild(metaDescription);
document.head.appendChild(favicon);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
