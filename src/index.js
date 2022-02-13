import React from "react";
import { hydrate, render } from "react-dom";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import NavBar from "./NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { StyledEngineProvider } from "@mui/material/styles";
const APP = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}
