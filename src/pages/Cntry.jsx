 

const Cntry = ({ item }) => {
  const { country, image, description } = item;
  return (
    <div>
      <div>
       
      </div>
      <div className="lg:w-full w-96">
        <div className=" bg-base-100 shadow-xl mb-2 lg:flex justify-center items-center rounded-xl">
          <figure className=" lg:w-[50%] ">
            <img className="w-96 h-80 rounded-xl" src={image} alt="Movie" />
          </figure>
          <div className="card-body  lg:w-[50%]">
            <h2 className="card-title">Country : {country}</h2>
            <p> Description : {description}</p>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cntry;
