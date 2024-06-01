import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import FavoriteMovies from "./pages/FavoriteMovies/FavoriteMovies.tsx";
import Home from "./pages/Home/Home.tsx";
import WatchedMovies from "./pages/WatchedMovies/WatchedMovies.tsx";
import { clientId, domain } from "./utils.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorites",
    element: <FavoriteMovies />,
  },
  {
    path: "/watched",
    element: <WatchedMovies />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      cacheLocation="localstorage"
      domain={domain}
      clientId={clientId}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
