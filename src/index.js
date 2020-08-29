import React from 'react';
import ReactDOM from 'react-dom'

import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import App from './components/app';
import ErrorBoundry from "./components/error-boundry";
import RestoService from "./services/resto-service";
import RestoServiceContext from "./components/resto-service-context";
import store from "./store";

import './index.scss';



ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundry>
        <RestoServiceContext.Provider value={RestoService}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RestoServiceContext.Provider>
      </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
