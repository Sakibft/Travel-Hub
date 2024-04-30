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
import Update from "../pages/Update";
import Spacifik from "../components/Spacifik";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rot></Rot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch('https://b9a10-server.vercel.app/spots')
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
        loader:() => fetch('https://b9a10-server.vercel.app/spots')
        
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
      element:
      <MyListPrivate>
        <ViewDetails></ViewDetails>
      </MyListPrivate>,
      loader: ({params})=>fetch(`https://b9a10-server.vercel.app/spots/${params.id}`)
      },
      {
        path:"/update/:id",
        element:
        <MyListPrivate>

          <Update></Update>
        </MyListPrivate>,
        loader:({params})=>fetch(`https://b9a10-server.vercel.app/spots/${params.id}`)
      },
      {
        path:"/spacifik/:country",
        element:<Spacifik></Spacifik>,
        loader:({params})=> fetch(`https://b9a10-server.vercel.app/countryes/${params.country}`)
      }
    ],
  },
]);

export default router;
