import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";
import Login from "../components/Login/Login";
import Register from "../components/Register.jsx/Register";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error></Error>,
      element: <Root></Root>,
      children: [{
        path: "/",
        element: <Home></Home>
      },
    {
      path: "/login",
      element: <Login></Login>
    },
  {
    path: "/register",
    element: <Register></Register>
  }]
    },
  ]);

  export default router;