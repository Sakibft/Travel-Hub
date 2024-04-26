import { createBrowserRouter } from "react-router-dom";
import Rot from "../Rot.jsx/Rot";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import AllTouristsSport from "../pages/AllTouristsSport";
import AddTouristsSport from "../pages/AddTouristsSport";
import MyList from "../pages/MyList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateAddToSpot from "../Private/PrivateAddToSpot";
import MyListPrivate from "../Private/MyListPrivate";
import ViewDetails from "../pages/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rot></Rot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('https://b9a10-server.vercel.app/users')
      },
      {
        path: "/allTouristsSpot",
        element: <AllTouristsSport></AllTouristsSport>,
        loader:() => fetch('https://b9a10-server.vercel.app/spots')
      },
      {
        path: "/addTouristsSpot",
        element: (
          <PrivateAddToSpot>
            <AddTouristsSport></AddTouristsSport>
          </PrivateAddToSpot>
        ),
      },
      {
        path: "/myList",
        element: (
          <MyListPrivate>
            <MyList></MyList>,
          </MyListPrivate>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:"/view/:id",
      element:<ViewDetails></ViewDetails>
      }
    ],
  },
]);

export default router;
