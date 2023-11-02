
import React from "react";
import * as ReactDOM from "react-dom/client";
import Newest from "./pages/Newest";
import "./styles/index.css";
import Book from "./pages/Book";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Newest />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </Router>
  </>
);
