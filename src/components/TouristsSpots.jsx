import { Link } from "react-router-dom";

const TouristsSpots = ({ item }) => {
  const { _id, photo, spot, cost, visitor, time, season } = item;
  return (
    <div>
      <div>
        <div className="card   w-96 lg:w-full bg-base-100 shadow-xl">
      
          <figure>
            <img className="h-60 rounded-md" src={photo} alt="Shoes" />
          </figure>
          <div className="p-3">
          <div className=" left-4 right-4 top-4 flex items-center justify-between">
                {/* love  */}
                <div className="flex items-center"><svg width={30} className="fill-transparent stroke-black stroke-2 hover:fill-pink-400 hover:stroke-pink-400 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg></div>
                <button className="rounded-xl  bg-pink-400 px-3 py-1 font-medium text-white duration-200">Cost : {cost}</button>
            </div>
            <h2 className="font-semibold text-center mt-2 "> Tourists Spot Name : {spot}</h2>
            <hr className="divide-dashed" />
            
            <p className="text-center text-gray-500 text-sm mt-1"> Per Year Visitors : {visitor}</p>
            <p  className="text-center text-gray-500 text-sm mt-1"> Travel Time : {time}</p>
            <p  className="text-center text-gray-500 text-sm mt-1">Seasonality : {season}</p>
            <div className="card-actions justify-center">
              <Link to={`/view/${_id}`}>
                <button className=" border mt-2  border-pink-400 hover:bg-pink-400  text-pink-400 hover:text-white rounded-full py-1 px-2">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TouristsSpots;
