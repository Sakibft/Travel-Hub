import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import TouristsSpots from "../components/TouristsSpots";
import CommonQuestion from "../components/CommonQuestion";
import OurTeam from "../components/OurTeam";

const Home = () => {
const user = useLoaderData();
const firstSixData = user.slice(0,6);
 
console.log(user.length);
  return (
    <div className="container mx-auto">
     <Banner></Banner>
     {/* Poplar */}
     <div>
     <div className="flex justify-center flex-col items-center">
        <h1 className="text-center mt-16   text-4xl font-semibold"> <span className="text-pink-400">P</span>opular <span className="text-pink-400">D</span>estination</h1>
        <div className=" border border-pink-400 w-20 ">
           </div>
        <div className=" border border-pink-400 w-40 mt-1 mb-8">
           </div>
      </div>
     <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5  justify-around">
     {
      firstSixData.map((item) => <TouristsSpots key={item._id} item={item}></TouristsSpots>)
     }
     </div>
     </div>
     {/* Common question */}
     <div>
    <CommonQuestion></CommonQuestion>
     </div>
     {/* Our team */}
      <div>
     <OurTeam></OurTeam>
      </div>
    </div>
  );
};

export default Home;