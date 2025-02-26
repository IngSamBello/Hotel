import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import Img1 from "../assets/images/hotels/image.png";
import Img2 from "../assets/images/hotels/imag3.png";
import Img3 from "../assets/images/hotels/imagen5.png";
import { useEffect } from "react";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img1,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img2,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img3,
    btnText: "See our rooms",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      aautoplay = {{
        delay: 3000,
        disableOnInteraction:false,
      }}
      className="heroSlider h-[600px] lg:h-[860px]"
    >
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide
            className="h-full  relative flex justify-center items-center"
            key={index}
          >
            <div className="z-20 text-white text-center">
              <div className="uppercase font-tertiary tracking-[6px] mb-5">
                Just Enjoy and Relax
              </div>
              <h1
                className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight
              mb-6 "
              >
                {title}
              </h1>
              <button className="btn btn-lg btn-primary mx-auto">
                {btnText}
              </button>
            </div>
            <div className="absolute top-0 w-full h-full">
              <img className="object-cover h-full w-full" src={bg} alt="" />
            </div>
            <div className="absolute w-full h-full bg-black/30"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
