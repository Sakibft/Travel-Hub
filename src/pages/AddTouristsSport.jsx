import toast, { Toaster } from "react-hot-toast";

const AddTouristsSport = () => {
  const handleAddSpot= (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const country = form.country.value;
    const spot = form.spot.value;
    const location = form.location.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const time = form.time.value;
    const visitor = form.visitor.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const allData = {
      name,
      email,
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
    console.log(allData);
    fetch('http://localhost:5000/spots',{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(allData)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        toast.success('Spot Added successfully!')
      }
      console.log(data);
    })
  };
  return (
    <div className="container mx-auto">
       <div><Toaster/></div>
      <h1>Add tourists Spot</h1>
      <div className="max-w-full mx-auto">
        <form onSubmit={handleAddSpot}>
          <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-4">
            {/* left */}
            <div className="w-full sm:w-1/2 ">
              <div className="flex flex-col space-y-1 mb-4">
                <label htmlFor="username" className="block ">
                  User Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                />
                <label htmlFor="username" className="block ">
                  User Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                />
                <label htmlFor="username" className="block ">
                  Country_Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Enter country name"
                  type="text"
                  name="country"
                />
                <label htmlFor="username" className="block ">
                  Tourists_spot_name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Enter country name"
                  type="text"
                  name="spot"
                />
                <label htmlFor="username" className="block ">
                  Location
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Enter location"
                  type="text"
                  name="location"
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
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Available Quantity"
                  type="text"
                  name="season"
                />
                <label htmlFor="username" className="block ">
                  Travel_time
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Travel time"
                  type="text"
                  name="time"
                />
                <label htmlFor="username" className="block ">
                  TotalVisitorsPerYear
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Enter coffee details"
                  type="text"
                  name="visitor"
                />
                <label htmlFor="username" className="block ">
                  Sort description
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Enter coffee details"
                  type="text"
                  name="description"
                />
                  <label htmlFor="username" className="block ">
                  Average_cost
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
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
              className="w-full px-3 py-2 rounded-lg focus:outline-none "
              type="text"
              placeholder="Enter photo URL"
              name="photo"
            />

            <input
              className="w-full px-3 py-2  mt-2 btn rancho text-xl border border-[#331A15]"
              type="submit"
              value="Add "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTouristsSport;
