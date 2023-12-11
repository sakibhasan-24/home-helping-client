import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HomeComponents from "../pages/HomeComponents";
import Login from "../pages/Form/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <HomeComponents /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
export default router;
