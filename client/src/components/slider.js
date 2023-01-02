import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <div className="md:w-8/12 md:py-4 md:h-full">
      {" "}
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="md:rounded-lg md:h-full md:shadow-md"
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide className="md:h-{80} md:w-full">
          <img
            src="https://res.cloudinary.com/temilorun/image/upload/v1671468957/slider-1_vnp35g.png"
            alt="slider-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/temilorun/image/upload/v1671469507/slider-2_fngbo7.png"
            alt="slider-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://res.cloudinary.com/temilorun/image/upload/v1671470047/slider-3_iffiic.png"
            alt="slider-3"
          />
        </SwiperSlide>

        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div class="swiper-scrollbar"></div>
      </Swiper>
    </div>
  );
};

export default Slider;
