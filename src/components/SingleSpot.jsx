import { Link } from "react-router-dom";

 

const SingleSpot = ({item}) => {
  const {_id,photo,spot,cost,visitor,time,season}=item;
  console.log(photo);
  console.log(item);
  return (
    <div>
    <div className="card   w-96 lg:w-full bg-base-100 shadow-xl">
  <figure><img className="h-60 rounded-md" src={photo} alt="Shoes" /></figure>
  <div className="p-3">
    
    <h2 className="card-title "> Tourists Spot Name : {spot}</h2>
    <hr className="divide-dashed" />
    <h2 className="card-title"> Total Cost : {cost}</h2>
    <p> Total Visitors Per Year : {visitor}</p>
    <p> Travel Time : {time}</p>
    <p>Seasonality : {season}</p>
    <div className="card-actions justify-end">
    <Link to={`/view/${_id}`}>
    <button className="btn bg-pink-400 border hover:border-pink-400 hover:bg-white hover:text-pink-400 text-white">View Details</button>
    </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default SingleSpot;