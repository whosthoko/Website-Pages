import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Styledslider from "../css/slidercss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider(props) {

  
  return (
    <Styledslider>
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={props.imageone}  alt="" style={props.style}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={props.imagetwo}  alt="" style={props.styletwo}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={props.imagethree}  alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={props.imagefour}  alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={props.imagefive} alt="" style={{ width: 280, height: 210 }}/>
        </SwiperSlide>
      </Swiper>
    </>
    </Styledslider>
  );
}

