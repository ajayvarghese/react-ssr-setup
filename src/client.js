import React from "react";
import { render, hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import App from "./client/App";
import createStore from "./store";
import {createBrowserHistory} from './utils/';
import {DevTools} from './components'

const _browserHistory = history;

/*TODO: use inital state for SSR*/
let __INITIAL_STATE__ = Object.assign({}, window.__INITIAL_STATE__ || {});
__INITIAL_STATE__.ui = fromJS(__INITIAL_STATE__.ui);

export const store = creatStore(_browserHistory, __INITIAL_STATE__);

// const store = createStore(window.REDUX_DATA);

const jsx = (
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>
);

hydrate(jsx, document.getElementById("app"));

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}

if (__DEVTOOLS__ && !window.devToolsExtension) {
  // const DevTools = require('./containers/DevTools/DevTools');
  ReactDOM.render(
      <div>
        <Component>
            <DevTools />
        </Component>
      </div>
    ,
    dest
  );
}

delete window.__INITIAL_STATE__;
