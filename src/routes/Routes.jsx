import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";
import Login from "../components/Login/Login";
import Register from "../components/Register.jsx/Register";
import AllSpot from "../components/AllSpot/AllSpot";
import AddSpot from "../components/AddSpot/AddSpot";
import MyList from "../components/MyList/MyList";

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
    },
    {
      path: "/allSpot",
      element: <AllSpot></AllSpot>,
      loader: () => fetch('http://localhost:5000/spots')
    },
    {
      path: "/addSpot",
      element: <AddSpot></AddSpot>
    },
    {
      path: "/myList",
      element: <MyList></MyList>
    }]
  },
]);

export default router;