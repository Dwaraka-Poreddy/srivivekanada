import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import NavBar from "./NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { StyledEngineProvider } from "@mui/material/styles";
ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StyledEngineProvider>,
  document.getElementById("root")
);
