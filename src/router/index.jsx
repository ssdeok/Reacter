import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PostList from "../pages/PostList";
import Movie from "../pages/Movie";
import RouteLayout from "../RouteLayout";
import PostDetail from "../pages/MovieList";
import NotFound from "../pages/NotFound";
import MovieList from "../pages/MovieDetail";
import MovieDetail from "../pages/MovieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/posts",
        element: <PostList />,
      },
      {
        path: "/posts/:url",
        element: <PostDetail />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);

export default router;
