/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { createRoot } from 'react-dom/client';
import "../index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

const App = () => {
  return (
    <p>My Super React and Typescript app</p>
  )
}

root.render(<App />)