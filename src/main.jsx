import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { BrowserRouter } from 'react-router-dom'

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// step one browserrouter ley  app component wrap main file main.jsx
// route milauxau kaa? app.jsx

// routes route
