import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Authentication } from "./pages/authentication";
import { CreateEvent } from "./pages/create-event";
import { Event } from "./pages/event";
import { Home } from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Authentication type="login" />,
  },
  {
    path: "/signup",
    element: <Authentication type="signup" />,
  },
  {
    path: "/create-event",
    element: <CreateEvent />,
  },
  {
    path: "/events/:id",
    element: <Event />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
