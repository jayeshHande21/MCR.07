import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import {
  TourDataContext,
  TourDataContextProvider
} from "./Context/TourDataContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { TourDataContext };

root.render(
  <StrictMode>
    <Router>
      <TourDataContextProvider>
        <App />
      </TourDataContextProvider>
    </Router>
  </StrictMode>
);
