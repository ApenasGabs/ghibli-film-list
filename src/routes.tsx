import { createBrowserRouter } from "react-router-dom";
import FavoriteMovies from "./pages/FavoriteMovies/FavoriteMovies";
import Home from "./pages/Home/Home";
import WatchedMovies from "./pages/WatchedMovies/WatchedMovies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorites/movies",
    element: <FavoriteMovies />,
  },
  {
    path: "/watched/movies",
    element: <WatchedMovies />,
  },
]);
