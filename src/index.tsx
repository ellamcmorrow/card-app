import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { CardItem, CardList, Wrapper } from "./components";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

/**
 * Using hashrouter as browser router doesnt work properly w/ gh-pages
 * https://reactrouter.com/en/main/router-components/hash-router
 */

const router = createHashRouter([
  {
    path: "/",
    element: (
      <Wrapper>
        <CardList />
      </Wrapper>
    ),
  },
  {
    path: "/card/:productId",
    element: (
      <Wrapper>
        <CardItem />
      </Wrapper>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
