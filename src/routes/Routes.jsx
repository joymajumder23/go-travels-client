import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";
import Login from "../components/Login/Login";
import Register from "../components/Register.jsx/Register";
import AllSpot from "../components/AllSpot/AllSpot";
import AddSpot from "../components/AddSpot/AddSpot";
import MyList from "../components/MyList/MyList";
import ViewDetails from "../components/ViewDetails/ViewDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import SouthEastAsia from "../components/SouthEastAsia/SouthEastAsia";
import Explore from "../components/Explore/Explore";
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [{
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/spots')
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
      element: <MyList></MyList>,
      // loader: ({params}) => fetch(`http://localhost:5000/myList/${params.email}`)
    }, 
    {
      path: "/viewDetails/:id",
      element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
      loader: () => fetch('http://localhost:5000/spots')
    },
  {
    path: "/country",
    element: <SouthEastAsia></SouthEastAsia>
  },
{
  path: "/explore/:country",
  element: <Explore></Explore>,
  loader: () => fetch('http://localhost:5000/spots')
},
{
  path: "/profile",
  element: <Profile></Profile>
}]
  },
]);

export default router;