import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import imageSlide from "@/utils/imageSlide";
interface SlideHomeProps {}

const SlideHome: React.FC<SlideHomeProps> = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  SwiperCore.use([Autoplay]);
  return (
    <div className="mx-auto xl:w-1170 container">
      <Swiper
        loop={true}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {imageSlide.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.url} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={(newSwiper) => setThumbsSwiper(newSwiper)}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {imageSlide.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.url} alt={`Thumb ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideHome;
