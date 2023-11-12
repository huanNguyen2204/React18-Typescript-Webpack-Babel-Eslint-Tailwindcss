/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";

const root = createRoot(document.getElementById("root"));

const App = () => {
  return (
    <p>My Super React and Javascript app</p>
  )
}

root.render(<App />)