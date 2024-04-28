import { FaFacebook } from 'react-icons/fa';
import a from '../assets/a.png'
import b from '../assets/b.png'
import c from '../assets/c.png'
import { AiFillTwitterCircle } from 'react-icons/ai';
const OurTeam = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-center mt-16   text-4xl font-semibold">
          
          <span className="text-pink-400">O</span>ur
          <span className="text-pink-400">T</span>am
        </h1>
        <div className=" border border-pink-400 w-20 "></div>
        <div className=" border border-pink-400 w-40 mt-1 mb-8"></div>
      </div>
      {/* card */}
     <div className='flex justify-center items-center'>


      <div className='grid lg:grid-cols-3    justify-around w-[76%]'>
     <div>
     <img className='w-96 mt-8 rounded-md' src={a} alt="" />
     <h1 className='text-center text-xl font-semibold'>Skisal buil</h1>
     <p className='text-center'>Professional guide | 2 years experience</p>
     <div className='flex justify-around text-2xl mt-1 mb-2'>
     <FaFacebook />
     <AiFillTwitterCircle />
     </div>
     </div>
     <div>

      <img className='w-96 rounded-md' src={b} alt="" />
      <h1 className='text-center text-xl font-semibold'>Jown Plen</h1>
     <p className='text-center'>Professional guide | 10 years experience</p>
     <div className='flex justify-around text-2xl mt-1 mb-2'>
     <FaFacebook />
     <AiFillTwitterCircle />
     </div>
     </div>
     <div>

      <img className='w-96 mt-8 rounded-md' src={c} alt="" />
      <h1 className='text-center text-xl font-semibold'>Kamil Rown</h1>
     <p className='text-center'>Professional guide | 2 years experience</p>
     <div className='flex justify-around text-2xl mt-1 mb-2'>
     <FaFacebook />
     <AiFillTwitterCircle />
     </div>
     </div>
      </div>
     
     </div>
    <div className='flex justify-center items-center'>
    <div className=" border border-pink-400 w-96">
           </div>
    </div>
     <div className=" border border-pink-400 w-full mt-1">
           </div>
    </div>
  );
};

export default OurTeam;
