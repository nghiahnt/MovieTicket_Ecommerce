import React from "react";
import ReactDOM from "react-dom/client";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import App from "./App.jsx";
import MovieDetail from "./pages/MovieDetail/MovieDetail.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout App={App} />,
  },
  {
    path: "/detail",
    element: <DefaultLayout App={MovieDetail} />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
