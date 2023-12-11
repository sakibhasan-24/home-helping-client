import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HomeComponents from "../pages/HomeComponents";
import Login from "../pages/Form/Login";
import Signup from "../pages/Form/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <HomeComponents /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);
export default router;
