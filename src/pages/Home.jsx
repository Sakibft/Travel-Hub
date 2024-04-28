import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import TouristsSpots from "../components/TouristsSpots";
import CommonQuestion from "../components/CommonQuestion";
import OurTeam from "../components/OurTeam";
import { useEffect, useState } from "react";
// import Country from "../components/Country";
import Cntry from "./Cntry";

const Home = () => {
  const [country, setCountry]=useState();
  console.log(country);
const user = useLoaderData();
const firstSixData = user.slice(0,8);
 useEffect(()=>{
  fetch('https://b9a10-server.vercel.app/countryes')
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    setCountry(data)
  })
 },[])
console.log(user.length);
  return (
    <div className="container mx-auto">
     <Banner></Banner>
     {/* Poplar */}
     <div>
     <div className="flex justify-center flex-col items-center">
        <h1 className="text-center mt-16   text-4xl font-semibold"> <span className="text-pink-400">P</span>opular<span className="text-pink-400">D</span>estination</h1>
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
      <div>
      <div>
        <h1 className="text-center text-2xl font-semibold mt-8 mb-4">Chose and Pick</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-4  justify-around">
        {
          country && country.map(item => <Cntry key={item._id} item={item}></Cntry>)
        }
      </div>
      </div>
    </div>
  );
};

export default Home;