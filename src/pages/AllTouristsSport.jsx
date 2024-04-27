import { useLoaderData } from "react-router-dom";
import SingleSpot from "../components/SingleSpot";

 

const AllTouristsSport = () => {
  const spots = useLoaderData();
 console.log(spots);
  return (
    <div className="grid lg:grid-cols-4 justify-around gap-5 container mx-auto">
      
   
     {
      spots.map((item)=> <SingleSpot key={item._id} item={item}></SingleSpot>)
     }
 
    </div>
  );
};

export default AllTouristsSport;