import { HiOutlineMail } from "react-icons/hi";
import { LiaPhoneSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import lsd from "../assets/tour.svg"
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { SiInstagram, SiTelegram } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
 

const Footer = () => {
  return (
    <div>
         <div className="mt-20 ">
      {/* <hr className="border border-[#8EA7E9]" /> */}
      <footer className="flex flex-col text-black ">
        <div className="flex flex-col items-center justify-around   bg-gray-100  md:flex-row md:gap-0 ">
          <aside className="flex items-center justify-center gap-3 text-xl mt-3 ">
            <div>

           <h1 className="text-2xl font-semibold">Tour <span className="text-pink-400">Hub</span></h1>
           <div className=" border border-pink-400  ">
           

           </div>
            </div>
           
             <img className="w-40" src={lsd} alt="" />
           
          </aside>
           
          <div>
            <h1 className="text-xl font-semibold "> Social media links</h1>
            <div className=" border border-pink-400 w-40">
           

            </div>
             
            
         <div className="flex  justify-around text-3xl mt-2">
         <FaFacebook className="cursor-pointer"/>
         <SiInstagram className="cursor-pointer" />
           
            <IoLogoYoutube className="cursor-pointer" />
         </div>
         <div className="flex justify-center gap-3 text-3xl mt-3">
         <AiFillTwitterCircle className="text-[33px] text-pink-400 cursor-pointer" />
            <SiTelegram className="text-pink-400 cursor-pointer" />
            </div>
          </div>
          <nav className="text-lg">
               <h1 className="text-[20px] font-semibold">Contact Now ~</h1>
               <div className=" border border-pink-400 w-40">
           

           </div>
            <div className="mt-2">
            <h1 className="flex gap-2 ">Number : 01740228022 <LiaPhoneSolid className="mt-1" /> </h1>
            <h1 className="flex gap-2">email : ssar96540@gmail.com <HiOutlineMail className="mt-2" /> </h1>
            <h1 className="flex gap-2">Office : Dhaka,Narshingdi,Shibpur <SlLocationPin className="mt-1" /></h1>
            </div>
          </nav>
        </div>
        {/* <aside className="bg-pink-400 py-5 text-center text-sm"> */}
         <div className="w-full justify-center items-center bg-gray-100 py-2 ">
         <p className="  text-center bg-pi   border   container mx-auto  rounded-xl bg-pink-400  ">
          <div className="text-white">
          &copy; 2024 Travel ~ Hub. All Rights Reserved.
          </div>
         </p>
         </div>
        {/* </aside> */}
      </footer>
    </div>
    </div>
  );
};

export default Footer;