import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import TouristsSpots from "../components/TouristsSpots";

const Home = () => {
const user = useLoaderData();
 
console.log(user.length);
  return (
    <div className="container mx-auto">
     <Banner></Banner>
     {/* {
      user.map((item)=> item.slice(0,6)  
        <TouristsSpots></TouristsSpots>
       )
     } */}
       <h1>{user.length}</h1>
    </div>
  );
};

export default Home;