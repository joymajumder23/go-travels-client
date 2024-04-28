import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error></Error>,
      element: <Root></Root>,
      children: [{
        path: "/",
        element: <Home></Home>
      }]
    },
  ]);

  export default router;