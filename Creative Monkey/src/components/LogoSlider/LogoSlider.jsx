import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./customStyles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import imagePaths from "../../assets/LOGOS/index.js";

const LogoSlider = () => {
  return (
    <div className="bg-white h-96 ">
      <div className="flex justify-center items-center h-32  ">
        <h2 className=" font-semibold  text-black text-3xl md:text-5xl ">
          Confian en nuestro servicio
        </h2>
      </div>
      <Swiper
        centeredSlides={true}
        speed={1300}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          390: {
            slidesPerView: 3,
            spaceBetween: 10,
            speed: 1000,
          },

          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },

          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        <div className="swiper-wrapper">
          {imagePaths.map(({ path, imageName }) => (
            <SwiperSlide key={imageName} className="h-36 w-[250px]  bg-white  ">
              <img
                key={imageName}
                src={path}
                alt={imageName}
                className={`h-32 w-3/4   object-contain  text-center mt-2  m-auto `}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default LogoSlider;
