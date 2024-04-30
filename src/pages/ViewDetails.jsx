import { Helmet } from "react-helmet-async";
import { BiPhoneCall } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const user = useLoaderData();

  const {
    photo,
    spot,
    cost,
    visitor,
    time,
    season,
    country,
    description,
    location,
    name,
  } = user;
  console.log(user);
  return (
    <div className="container mx-auto mt-20">
      <Helmet>
        <title>View Details</title>
      </Helmet>
      <div className="card md:card-side bg-base-100 shadow-xl lg:h-96 border-2 border-y-pink-400">
        <figure className="   w-full">
          <img src={photo} alt="Movie" />
        </figure>
        <div className="  pl-5 flex flex-col justify-center gap-y-1 ">
          <h2 className="text-2xl font-semibold">Country: {country}</h2>
          <div className=" border border-pink-400  w-60 "></div>
          <p>
            {" "}
            <span className="font-semibold"> Tourists spot name : </span>
            <span className="  font-sans text-gray-500">{spot}</span>{" "}
          </p>
          <p  className=" underline px-2 w-60" >
            <span className="font-semibold"> Average cost : </span>
            <span>
              {" "}
              {cost}
            </span>
          </p>
          <p>
            <span className="font-semibold">Name : </span>
            <span className="font-sans text-gray-500">{name}</span>
          </p>

        
          <p> <span className="font-semibold">Travel time :</span> <span className="font-sans text-gray-500 ">{time}</span> </p>
          <p> <span  className="font-semibold"> Seasonality : </span>
         <span className="font-sans text-gray-500 ">
         {season}
          </span> </p>
          <p  className="font-semibold"> <span> Location : </span><span className="font-sans text-gray-500" > {location}</span></p>
          <p  className="font-semibold" >Total visitors per year : <span className="font-sans text-gray-500 text-sm "> {visitor}</span></p>
          <p>
            {" "}
            <span className="font-semibold"> Description : </span>
            <span className="text-sm font-sans text-gray-600">
              {description}
            </span>{" "}
          </p>

          <div className="card-actions justify-center">
          <button className="btn text-white bg-pink-400 ">
              Contact Now 
              <BiPhoneCall className="font-bold text-xl" />

            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
