import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import TouristsSpots from "../components/TouristsSpots";

const Home = () => {
const user = useLoaderData();
const firstSixData = user.slice(0,6);
 
console.log(user.length);
  return (
    <div className="container mx-auto">
     <Banner></Banner>
     <div>

     <div className="flex justify-center flex-col items-center">
        <h1 className="text-center mt-16   text-2xl font-semibold">Popular Destination</h1>
        <div className=" border border-pink-400 w-20 ">
           </div>
        <div className=" border border-pink-400 w-40 mt-1 mb-8">
           </div>
      </div>
     <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5  ">
     
     {
      firstSixData.map((item) => <TouristsSpots key={item._id} item={item}></TouristsSpots>)
     }
     </div>
     </div>
      
    </div>
  );
};

export default Home;