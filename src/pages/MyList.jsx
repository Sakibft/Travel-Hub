import {  Link, useLoaderData } from "react-router-dom";
import { UserContext } from "../ContextComponent/AuthContextComponent";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(UserContext);
  const allUsers = useLoaderData();
  const [singleusr, setsingluser] = useState();

  //  console.log(user);

  useEffect(() => {
    if (allUsers) {
      const remaining = allUsers.filter((item) => item.email == user.email);
      setsingluser(remaining);
    }
  }, [allUsers, user]);
  console.log(singleusr);
  const handleDelete = _id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/spots/${_id}`,{
          method:"DELETE",
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount>0){
              Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        const remaining = singleusr.filter(usr => usr._id !== _id) 
        setsingluser(remaining)
        console.log(data);
          }
        })
      }
    });
  }
  return (
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5 justify-around">
        {singleusr &&
          singleusr.map((item) => (
            <div key={item._id}>
              <div>
                <div className="card   w-96 lg:w-full bg-base-100 shadow-xl">
                  <figure>
                    <img
                      className="h-60 rounded-md"
                      src={item.photo}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="p-3">
                    <h2 className="card-title ">
                      {" "}
                      Tourists Spot Name : {item.spot}
                    </h2>
                    <hr className="divide-dashed" />
                    <h2 className="card-title"> Total Cost : {item.cost}</h2>
                    <p> Total Visitors Per Year : {item.visitor}</p>
                    <p> Travel Time : {item.time}</p>
                    <p>Seasonality : {item.season}</p>
                    <div className="card-actions justify-end">
                       <Link to={`/update/${item._id}`}>
                       <button className="btn bg-pink-400 border hover:border-pink-400 hover:bg-white hover:text-pink-400 text-white">
                           Update
                        </button>
                       </Link>
                        <button onClick={()=> handleDelete(item._id)} className="btn bg-pink-400 border hover:border-pink-400 hover:bg-white hover:text-pink-400 text-white">
                           delate
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
  );
};

export default MyList;
