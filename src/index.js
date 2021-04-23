import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "assets/css/index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root"),
);

reportWebVitals();
