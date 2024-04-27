import { HiOutlineMail } from "react-icons/hi";
import { LiaPhoneSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";

 

const Footer = () => {
  return (
    <div>
         <div>
      {/* <hr className="border border-[#8EA7E9]" /> */}
      <footer className="flex flex-col text-black">
        <div className="flex flex-col items-center justify-around gap-5 bg-gray-100  md:flex-row md:gap-0">
          <aside className="flex items-center justify-center gap-3 text-xl mt-3 ">
           
             
           
          </aside>
          <div>
            <h1 className="text-xl font-semibold  ">Our Services</h1>
            <ul className="flex flex-col  ">
            <li className="flex text-[#8EA7E9] underline">
                <a href="">Customized Solutions</a>
              </li>
            <li className="flex text-[#8EA7E9] underline">
                <a href="">Property Management</a>
              </li>
             
             
              <li className="flex text-[#8EA7E9] underline">
                <a href="">Market Analysis</a>
              </li>

         
              <li className="flex text-[#8EA7E9] underline">
                <a href="">Investment Analysis</a>
              </li>
         
            </ul>
          </div>
          <nav className="text-lg">
            <ul className=" flex h-full items-center justify-center gap-5 ">
              <li className="cursor-pointer">
                <a className="flex gap-1">
               <h1 className="text-[20px] font-semibold">Follow Us ~</h1>
               

                </a>
              </li>
              <li className="cursor-pointer">
                <a>
               

                </a>
              </li>
              <li className="cursor-pointer">
                  
              </li>
              <li className="cursor-pointer">
                
              </li>
            </ul>
            <div className="mt-2">
            <h1 className="flex gap-2 ">Number : 01740228022 <LiaPhoneSolid className="mt-1" /> </h1>
            <h1 className="flex gap-2">email : ssar96540@gmail.com <HiOutlineMail className="mt-2" /> </h1>
            <h1 className="flex gap-2">Office : Dhaka,Narshingdi,Shibpur <SlLocationPin className="mt-1" /></h1>
            </div>
          </nav>
          <div>
            <h1 className="text-xl font-semibold ">Reach Us Here</h1>
             
            <p className="flex flex-col text-sm  text-[#8EA7E9]">Ready to get started? <br />Contact us today to learn more about how we  can help you<br /> with all of your real estate needs.  We look forward to the <br /> opportunity to work with you and exceed your expectations. <br /> <span className="fon-semibold text-lg">Thank you for choosing Sale~Home!</span></p>
         
          </div>
     
        </div>
        <aside className="bg-[#8EA7E9] py-5 text-center text-sm">
          <p className="text-white text-lg">&copy; 2024 Sale ~ home. All Rights Reserved.</p>
        </aside>
      </footer>
    </div>
    </div>
  );
};

export default Footer;