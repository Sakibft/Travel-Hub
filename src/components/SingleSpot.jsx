import { Link } from "react-router-dom";

 

const SingleSpot = ({item}) => {
  console.log(item);
  return (
    <div>
    <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item?.email}</h2>
    <h2 className="card-title">{item?.country}</h2>
    <p>{item?.description}</p>
    <div className="card-actions justify-end">
    <Link to={`/view/${item._id}`}>
    <button className="btn btn-primary">View Details</button>
    </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default SingleSpot;