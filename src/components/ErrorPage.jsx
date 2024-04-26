 import { Link } from "react-router-dom";
import asd from "../assets/alsd.gif"

const ErrorPage = () => {
  return (
    <div>
       <div className="w-full min-h-screen flex flex-col justify-center items-center" >
        <img className="shadow-xl" src={asd} alt="" />
      <Link to='/'>
      <button className="mt-5 btn bg-blue-500 text-white font-bold hover:bg-white hover:border-blue-600 hover:text-black">Back to home</button>
      </Link>
       </div>
    </div>
  );
};

export default ErrorPage;