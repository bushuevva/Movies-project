import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(React.createElement(App));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// export default App;
