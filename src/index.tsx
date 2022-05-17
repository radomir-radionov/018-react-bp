import React from "react";
import ReactDOM from "react-dom/client";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "requests/interceptors";
import history from "store/history";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureAppStore from "store";
import { Modal } from "modules";
import { GlobalStyles } from "styles";
import "assets/fonts/Montserrat/index.css";

const store = configureAppStore();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <GlobalStyles />
        <Modal />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
