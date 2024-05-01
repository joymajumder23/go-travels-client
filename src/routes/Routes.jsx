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
import UpdateSpot from "../components/UpdateSpot/UpdateSpot";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [{
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('https://tenth-assignment-server-opal.vercel.app/spots')
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
      loader: () => fetch('https://tenth-assignment-server-opal.vercel.app/spots')
    },
    {
      path: "/addSpot",
      element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>
    },
    {
      path: "/myList",
      element: <PrivateRoute><MyList></MyList></PrivateRoute>,
      // loader: () => fetch("https://tenth-assignment-server-opal.vercel.app/spots")
    }, 
    {
      path: "/viewDetails/:id",
      element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
      loader: () => fetch('https://tenth-assignment-server-opal.vercel.app/spots')
    },
  {
    path: "/country",
    element: <SouthEastAsia></SouthEastAsia>
  },
{
  path: "/explore/:country",
  element: <Explore></Explore>,
  loader: () => fetch('https://tenth-assignment-server-opal.vercel.app/spots')
},
{
  path: "/profile",
  element: <PrivateRoute><Profile></Profile></PrivateRoute>
},
{
  path: "/update/:id",
  element: <UpdateSpot></UpdateSpot>,
  loader: ({params}) => fetch(`https://tenth-assignment-server-opal.vercel.app/spots/${params.id}`)
}]
  },
]);

export default router;