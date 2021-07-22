import React from "react";
import ReactDOM from "react-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

import reportWebVitals from "./reportWebVitals";
import BCBirdIndex from "./components/BcBirdTask";

ReactDOM.render(
  <div>
    <BCBirdIndex />
  </div>,

  document.getElementById("root")
);

reportWebVitals();
