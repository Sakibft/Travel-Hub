import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import TouristsSpots from "../components/TouristsSpots";
import CommonQuestion from "../components/CommonQuestion";
import OurTeam from "../components/OurTeam";
import { useEffect, useState } from "react";
// import Country from "../components/Country";
import Cntry from "./Cntry";
import { Helmet } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";

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
    <div>
      <Helmet>
        <title>Travel Hub</title>
      </Helmet>
     <Banner></Banner>
     {/* Poplar */}
     <div className="container mx-auto">
     <div className="flex justify-center flex-col items-center">
        <h1 className="text-center mt-16   text-4xl font-semibold"> <span className="text-pink-400">P</span>opular<span className="text-pink-400">D</span>estination</h1>
        <div className=" border border-pink-400 w-20 ">
           </div>
        <div className=" border border-pink-400 w-40 mt-1 mb-8">
           </div>
      </div>
     <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5  justify-around ">
     {
      firstSixData.map((item) => <TouristsSpots key={item._id} item={item}></TouristsSpots>)
     }
     </div>
     </div>
     {/* <div className=" border border-pink-400 w-full mt-3 mb-8">
           </div> */}
        {/* Chose your dread country */}
        <div>
      <div>
        <h1 className="text-center text-4xl font-semibold mt-20 mb-1"> 
    
        
        
        
        
        <span className="text-pink-400">Chose</span> your dream  <span className="text-pink-400">
          
        <span  className="text-center text-4xl font-semibold  ">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' Country']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={120}
            deleteSpeed={100}
            delaySpeed={2000}
          
          />
        </span>
          </span> </h1>
        <div className="w-full flex justify-center items-center">

        <div className=" border border-pink-400 w-60  mb-1">
           </div>
        </div>
        <div className="w-full flex justify-center items-center">

        <div className=" border border-pink-400 w-80 mb-8">
           </div>
        </div>
      </div>
<div className="bg-sky-100 p-2">

      <div className="grid md:grid-cols-2 gap-5  justify-around  container mx-auto">
        {
          country && country.map(item => <Cntry key={item._id} item={item}></Cntry>)
        }
      </div>
</div>
      </div>
     {/* Common question */}
     <div className="container mx-auto">
    <CommonQuestion></CommonQuestion>
     </div>
     {/* Our team */}
      <div className="container mx-auto">
     <OurTeam></OurTeam>
      </div>
   
    </div>
  );
};

export default Home;