import React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import './styles/index.css'

const app = ReactDOM.createRoot(document.getElementById("app"));
console.log(app);
console.log(App);
app.render(<App />);

