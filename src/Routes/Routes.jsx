import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world! <button className="btn btn-primary">click me</button> </div>,
  },
]);

export default router;