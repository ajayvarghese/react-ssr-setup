import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import App from "./client/App";
import Template from "./client/Template";
import routes from './routes'

import createStore, { initializeSession } from "./store";

const app = express();
const host = "localhost";
const port = "2048";

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/*", (req, res) => {
  const store = createStore();
//   const context = {};
  store.dispatch(initializeSession());

  const jsx = (
    <ReduxProvider store={store}>
      <StaticRouter context={{}} location={req.url}>
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
      css: [...css].join('')
    })
  );
});

app.listen(port);

console.log(`Serving at http://${host}:${port}`);
