 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

 import '../../src/App.css'
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
      autoplay={{ delay: 4000 }}
      navigation={true}
      modules={[Navigation, Autoplay,  Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="slide slide1">
          <div>
            <h1 className="text-white text-center md:text-4xl text-2xl font-bold">
              Discover information about a potential new  home <br />and subsequently
              make a purchase.
            </h1>
            <div className="w-full flex justify-center items-center mt-4">
              <label className="input input-bordered flex rounded-full justify-between items-center gap-2 border-2 hover:border-[#8EA7FF] ">
                <input type="text" className="grow " placeholder="Search" />
                <span className="btn rounded-full  bg-[#8EA7FF] text-white hover:bg-[#8EA7FF] ">
                  Search
                </span>
              </label>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide slide2"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide slide3"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide slide4"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide slide5"></div>
      </SwiperSlide>
    </Swiper>
  </div>
  );
};

export default Banner;