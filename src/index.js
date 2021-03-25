import React from "react";
import ReactDOM from "react-dom";
import {AppContainer} from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/reduxStore";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
