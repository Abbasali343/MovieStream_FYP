import React from "react";
import ReactDOM from "react-dom/client";
import SignUp from "./views/SignUp";
import LogIn from "./views/LogIn";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <SignUp />
    <LogIn /> */}
  </React.StrictMode>
);
