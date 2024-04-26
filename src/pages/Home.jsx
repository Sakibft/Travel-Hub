import { useLoaderData } from "react-router-dom";

 
 
 
 
const Home = () => {
const user = useLoaderData()
console.log(user);
  return (
    <div>
   {
    user.map(item => 
    <>
    <h1>{item.name}</h1>
    <h1>{item.email}</h1>
    <h1>{item.photo}</h1>
    </>
    )
   }
      <h1>home</h1>
    </div>
  );
};

export default Home;