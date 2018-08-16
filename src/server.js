import express from "express";
import path from "path";
import webpack from 'webpack';
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import App from "./client/App";
import Template from "./client/Template";
import routes from './routes';


// const viewEngine = require('./view-engine');

import wdm from 'webpack-dev-middleware';
import config from './../webpack.config.js';

import createStore, { initializeSession } from "./store";

const app = express();
const host = "localhost";
const port = "3033";

var serverOptions = {
  contentBase: 'http://' + host + ':' + port,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: "/",
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
};

app.use(express.static(path.resolve(__dirname + './../static')));
app.use(express.static(path.resolve(__dirname, "../dist")));

var compiler = webpack(config);

// app.engine('js', viewEngine);

// Webpack Dev Middleware
// app.use(require('webpack-dev-middleware')(compiler, serverOptions));
// app.use(require('webpack-hot-middleware')(compiler));


app.get("/*", (req, res) => {
  const store = createStore();
  const context = {};
  // store.dispatch(initializeSession());

  const jsx = (
    <ReduxProvider store={store}>
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    </ReduxProvider>
  );

  const reactDom = renderToString(jsx);
  const reduxState = store.getState();

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(
    Template({
      body: reactDom,
      title: "React SSR",
      state: reduxState,
    })
  );
});

app.listen(port);

console.log(`Serving at http://${host}:${port}`);
