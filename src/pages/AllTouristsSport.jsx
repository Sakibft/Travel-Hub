import { useLoaderData } from "react-router-dom";
import SingleSpot from "../components/SingleSpot";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllTouristsSport = () => {
const spots = useLoaderData();
const [sortBy, setSortBy] = useState([]);
 
 useEffect(()=>{
  setSortBy(spots)
 },[])
   const handleSort = sort => {
    if(sort === 'ascending'){
      const sortSpots = [...spots].sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
      setSortBy(sortSpots)


      console.log('ascending');
    }

   else if(sort === 'descending'){
    const sortSpots = [...spots].sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
    setSortBy(sortSpots)
    console.log('descending');
   }
   }
   
 
  return (
    <div>
       <Helmet>
        <title>Al Tourists Spot</title>
      </Helmet>
       <div className="flex  justify-center items-center mt-4 w-full ">
          <details className="dropdown">
            <summary className="m-1 btn border-2 border-pink-400 text-pink-400 hover:bg-pink-400 text-2xl mb-4 hover:text-white">
              Sort By <RiArrowDropDownLine className="text-3xl" />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={()=> handleSort('ascending')}>
                <a>Ascending</a>
              </li>
              <li onClick={()=> handleSort('descending')}>
                <a> descending </a>
              </li>
            
            </ul>
          </details>
        </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-around gap-5 container mx-auto">
       

        {sortBy.map((item) => (
          <SingleSpot key={item._id} item={item}></SingleSpot>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSport;
