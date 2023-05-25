import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/style/main.scss";
import { Buy } from "./pages/buy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/buy" element={<Buy />} />
    </Routes>
  </BrowserRouter>
);
