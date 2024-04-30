// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "../../src/App.css";
import { Typewriter } from "react-simple-typewriter";
// import { Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="container mx-auto mt-8"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide1">
            <div>
              <h1 className="text-white text-center md:text-4xl text-2xl font-bold">
             
               

                <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold' }}>
                Discover information about a potential new country <br />  and 
        <span  className="font-bold text-pink-400">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ ' Next  toured the country']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={140}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
      </h1>
              </h1>
              <div className="w-full flex justify-center items-center mt-4">
                <label className="input input-bordered flex rounded-full justify-between items-center gap-2 border-2 hover:border-[#8EA7FF] ">
                  <input type="text" className="grow " placeholder="Search" />
                  <span className="btn rounded-full  bg-pink-400 text-white hover:bg-pink-400 ">
                    Search
                  </span>
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
          <h1 className="text-white text-center md:text-4xl text-2xl font-bold">
          Bangladesh is a land of natural beauty, rich culture, <br /> and warm hospitality.
              </h1>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">
            <h1 className="text-white text-center md:text-4xl text-2xl font-bold">
            Bangkok, Thailand’s capital, is a large city known for <br /> ornate shrines and vibrant street life.
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
