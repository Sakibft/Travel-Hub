import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Cntry = ({ item }) => {
  const { country, image, description } = item;
  return (
    <Link to={`/spacifik/${country}`}>
      <div>
        <div className="lg:w-full w-96">
          <div className=" bg-base-100 shadow-xl  lg:flex justify-center items-center rounded-xl transition duration-300 transform hover:scale-105 border-2 hover:border-y-pink-400">
            <figure className=" lg:w-[50%] ">
              <img className="w-96 h-80 rounded-xl" src={image} alt="Movie" />
            </figure>
            <div className="card-body  lg:w-[50%]">
              <h2 className="card-title">
          

           
              Country :
        <span >
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[country]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
   



              </h2>
              <p>
              
                <span className="font-semibold "> Description : </span> 
                <span className="text-gray-500">

                {description}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cntry;
