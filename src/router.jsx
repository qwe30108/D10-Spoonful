import { createHashRouter } from "react-router";
import FrontendLayout from "./layout/FrontendLayout";
import Home from "./pages/front/home";
import About from "./pages/front/About";
import NotFound from "./pages/front/NotFound";
import Login from "./pages/front/Login";
import Return from "./pages/front/Return";

export const router = createHashRouter([
  {
    path: "/",
    element: <FrontendLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "return",
        element: <Return />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
