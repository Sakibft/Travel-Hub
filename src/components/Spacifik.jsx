import { Link, useLoaderData } from "react-router-dom";

const Spacifik = () => {
  const country = useLoaderData();
  // console.log(country);
  return (
   <div>
    <div>
      <h1 className="text-center text-4xl font-semibold ">Make your choice and get one from here </h1>
      <div className="w-full flex justify-center items-center">

        <div className=" border border-pink-400 w-1/2 mb-8 mt-2">
           </div>
        </div>
    </div>
     <div className="grid lg:grid-cols-2 justify-around container mx-auto lg:w-[800px] gap-y-4 ">
      {country.map((item) => (
        <div key={item._id}>
         
          <div className="card   w-96 h-[700px]  bg-base-100 shadow-xl ">
            <figure>
              <img className="h-60 rounded-full" src={item.photo} alt="Shoes" />
            </figure>
            <div className="p-3">
              <h2 className="text-lg font-semibold text-center "> Country Name : {item.country}</h2>
              <h2 className="text-lg font-semibold text-center "> Tourists Spot Name : {item.spot}</h2>
              <hr className="divide-dashed" />
              <p className="text-center text-gray-500 mt-1 mb-1"> Total Visitors Per Year : {item.visitor}</p>

              <h2 className="text-xl text-center text-pink-400 border rounded-full border-pink-400 mb-1"> Total Cost : {item.cost}</h2>
              <p className="text-gray-500"> Location : {item.location}</p>
              <p className="text-gray-500">Seasonality : {item.season}</p>
             <p> <span className="font-semibold">Description : </span>  <span className="text-sm text-gray-500">{item.description}</span> </p>
              <div className="card-actions justify-end">
                <Link to={`/view/${item._id}`}>
                  <button className="btn border-pink-400 border  hover:bg-pink-400 bg-white   text-pink-400 hover:text-white rounded-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Spacifik;
