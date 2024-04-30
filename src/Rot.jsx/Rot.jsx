import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

 

const Rot = () => {
  return (
    <div className="overflow-hidden">
   <Nav></Nav>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Rot;