import { Link, useLoaderData } from "react-router-dom";
import { UserContext } from "../ContextComponent/AuthContextComponent";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Helmet } from "react-helmet-async";

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
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9a10-server.vercel.app/spots/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = singleusr.filter((usr) => usr._id !== _id);
              setsingluser(remaining);
              console.log(data);
            }
          });
      }
    });
  };
  return (
    <div className="w-full flex flex-col justify-center items-center" >
       <Helmet>
        <title>My List</title>
      </Helmet>
      <h1 className="text-center mb-2 text-2xl font-bold">My Collection</h1>
      <div className=" border border-pink-400 w-40">
           

           </div>
      <div className="container mx-auto border rounded-xl shadow-xl md:w-1/2  " >
        {/* <div className="card   w-96 lg:w-full bg-base-100 shadow-xl">
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
                </div> */}
                 
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-lg text-black">
              <tr className="border rounded-xl border-b-pink-400">
                <th>Image</th>
                <th>Details</th>
                <th>Update</th>
                <th>Action</th>
              </tr>
            </thead>
            
            <tbody>
              {singleusr &&
                singleusr.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div>
                        <div className="avatar">
                          <div className="mask mask-squircle w-20 h-20">
                            <img
                              src={item.photo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="font-semibold">
                        <span>Country : </span>
                        {item.country}
                      </span>
                      <br />
                      <span>Tourists spot name : {item.spot}</span>
                      <br />
                      <span>Seasonality : {item.season}</span>
                    </td>
                    <td>
                    <Link to={`/update/${item._id}`}>
                      
                      <button className="border flex gap-2 py-1 px-2  bg-pink-400 text-white   font-semibold rounded-md border-pink-400">
                        Update <FaPen />
                      </button>
                      </Link>
                    </td>
                    <th>
                      <button onClick={()=> handleDelete(item._id)} className="border flex gap-2 py-1 px-2  text-pink-400  font-semibold rounded-md border-pink-400">
                        Delete
                        <MdDelete />
                      </button>
                    </th>
                  </tr>
                ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
