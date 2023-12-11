import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HomeComponents from "../pages/HomeComponents";
import Login from "../pages/Form/Login";
import Signup from "../pages/Form/Signup";
import Checkout from "../components/CheckOut/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <HomeComponents /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      {
        path: "/checkout/:id",
        element: <Checkout />,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/services/${params.id}`);
        },
      },
    ],
  },
]);
export default router;
