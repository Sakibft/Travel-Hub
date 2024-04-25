import { createBrowserRouter } from "react-router-dom";
import Rot from "../Rot.jsx/Rot";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Rot></Rot>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
    ]
  },
]);

export default router;