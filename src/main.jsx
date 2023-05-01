import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// import "../scss/styles.scss";

// Import all of Bootstrap's JS
// import * as bootstrap from "bootstrap";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
