import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

 

const Update = () => {
  const user = useLoaderData()
  const {_id,photo,spot,cost,visitor,time,season,country,description,location,}=user;

const handleUpdate = e => {
  e.preventDefault();
  const form = e.target;
  const country = form.country.value;
  const spot = form.spot.value;
  const location = form.location.value;
  const cost = form.cost.value;
  const season = form.season.value;
  const time = form.time.value;
  const visitor = form.visitor.value;
  const description = form.description.value;
  const photo = form.photo.value;
  const UpUser = {
    
    country,
    spot,
    location,
    cost,
    season,
    time,
    visitor,
    description,
    photo,
  };
  console.log(UpUser);


  fetch(`http://localhost:5000/spots/${_id}`,{
    method:"PUT",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(UpUser)
  })
  .then(res => res.json())
  .then(data => {
    if(data.modifiedCount){
      Swal.fire({
        title: 'Update!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Yes'
      })
    }
    console.log(data);
  })
}



  return (
    <div className="container mx-auto">
      <h1> {user.country} </h1>
      <div className="max-w-full mx-auto">
        <form onSubmit={handleUpdate}  className="p-5">
          <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-4">
            {/* left */}
            <div className="w-full sm:w-1/2 ">
              <div className="flex flex-col space-y-1 mb-4">
              
               
                <label htmlFor="username" className="block ">
                  Country_Name
                </label>
                <input
                 className="w-full px-4 py-3 rounded-md   border border-pink-400    "
                  placeholder="Enter country name"
                  type="text"
                  name="country"
                />
                <label htmlFor="username" className="block ">
                  Tourists_spot_name
                </label>
                <input
                  className="w-full px-4 py-3 rounded-md   border border-pink-400    "
                  placeholder="Enter country name"
                  type="text"
                  name="spot"
                />
                <label htmlFor="username" className="block ">
                  Location
                </label>
                <input
                className="w-full px-4 py-3 rounded-md   border border-pink-400    "
                  placeholder="Enter location"
                  type="text"
                  name="location"
                />
                 <label htmlFor="username" className="block ">
                  Sort description
                </label>
                <input
                className="w-full px-4 py-3 rounded-md   border border-pink-400    "
                  placeholder="Enter  description"
                  type="text"
                  name="description"
                />
              
              </div>
            </div>
            {/* Right side content */}
            <div className="w-full sm:w-1/2">
              <div className="flex flex-col space-y-1 mb-4">
                <label htmlFor="username" className="block ">
                  Seasonality
                </label>
                <input
                 className="w-full px-4 py-3 rounded-md   border border-pink-400    "
                  placeholder="Available Quantity"
                  type="text"
                  name="season"
                />
                <label htmlFor="username" className="block ">
                  Travel_time
                </label>
                <input
                 className="w-full px-4 py-3 rounded-md   border border-pink-400    "
                  placeholder="Travel time"
                  type="text"
                  name="time"
                />
                <label htmlFor="username" className="block ">
                  TotalVisitorsPerYear
                </label>
                <input
                 className="w-full px-4 py-3 rounded-md   border border-pink-400    "
                  placeholder=". total visitors per year "
                  type="text"
                  name="visitor"
                />
               
                  <label htmlFor="username" className="block ">
                  Average_cost
                </label>
                <input
                className="w-full px-4 py-3 rounded-md   border border-pink-400    "
                  placeholder="Average_cost"
                  type="text"
                  name="cost"
                />
              </div>
            </div>
          </div>
          {/* phot and button */}
          <div>
            <label htmlFor="username" className="block ">
              Photo
            </label>
            <input
            className="w-full px-4 py-3 rounded-md   border border-pink-400    "
              type="text"
              placeholder="Enter photo URL"
              name="photo"
            />

            <input
              className="w-full px-3 py-2  mt-2 btn rancho text-xl border   bg-pink-400 text-white"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>


    </div>
  );
};

export default Update;