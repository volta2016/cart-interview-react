import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FiltersProviders } from "./context/filter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersProviders>
    <App />
  </FiltersProviders>
);
