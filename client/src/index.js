import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { LocationProvider } from "./location-context";

ReactDOM.render(
  <React.StrictMode>
    <LocationProvider>
      <App />
    </LocationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
