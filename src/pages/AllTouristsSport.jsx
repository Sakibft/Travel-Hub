import { useLoaderData } from "react-router-dom";
import SingleSpot from "../components/SingleSpot";
import { RiArrowDropDownLine } from "react-icons/ri";

const AllTouristsSport = () => {
  const spots = useLoaderData();
  console.log(spots);
  return (
    <div>
       <div className="flex  justify-center items-center mt-4 w-full ">
          <details className="dropdown">
            <summary className="m-1 btn bg-pink-400 text-white">
              Sort By <RiArrowDropDownLine className="text-3xl" />{" "}
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a>Chip to Primiyam </a>
              </li>
              <li>
                <a>Number of pages </a>
              </li>
              <li>
                <a>Publisher year</a>
              </li>
              <li>
                <a>Fiction</a>
              </li>
            </ul>
          </details>
        </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-around gap-5 container mx-auto">
       

        {spots.map((item) => (
          <SingleSpot key={item._id} item={item}></SingleSpot>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSport;
