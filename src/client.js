import React from "react";
import { render, hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import App from './client/App';

import createStore from "./store";

const store = createStore( window.REDUX_DATA );

const jsx = (
    <ReduxProvider store={ store }>
        <Router>
            <App />
        </Router>
    </ReduxProvider>
);

hydrate( jsx, document.getElementById( "app" ) );