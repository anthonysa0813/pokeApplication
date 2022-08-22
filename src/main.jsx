import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import DarkModeContextProvider from "./context/DarkMode";
import { store } from "./store/store";
import "react-toastify/dist/ReactToastify.css";
import ModalMenuProvider from "./context/ModalMenu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeContextProvider>
        <ModalMenuProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ModalMenuProvider>
      </DarkModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
