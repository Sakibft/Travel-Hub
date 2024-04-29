import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

 

const ViewDetails = () => {
  const user = useLoaderData()

  const {photo,spot,cost,visitor,time,season,country,description,location,name,}=user;
  console.log(user);
  return (
    <div className="container mx-auto">
       <Helmet>
        <title>View Details</title>
      </Helmet>
    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Country: {country}</h2>
    <p>{spot}</p>
    <p>{name}</p>
    <p>{cost}</p>
    <p>{visitor}</p>
    <p>{time}</p>
    <p>{season}</p>
    <p>{description}</p>
    <p>{location}</p>
     
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ViewDetails;