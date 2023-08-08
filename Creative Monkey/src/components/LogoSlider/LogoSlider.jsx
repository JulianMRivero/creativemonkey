import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagePaths from "../../assets/LOGOS/index.js";
const LogoSlider = () => {
  const settings = {
    infinite: true,
    lazyLoad: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10,
    cssEase: "linear",
    prevArrow: <></>,
    nextArrow: <></>,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          speed: 5000,
          autoplaySpeed: 10,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
          speed: 5000,
          autoplaySpeed: 10,
          swipeToSlide: true,
        },
      },
    ],
  };
  console.log(imagePaths);

  return (
    <div className="bg-white h-96 ">
      <div className="flex justify-center items-center h-32  ">
        <h2 className="font-nunito font-medium  text-black text-3xl md:text-5xl ">
          Confian en nuestro servicio
        </h2>
      </div>
      <div className=" w-full">
        <Slider {...settings}>
          {imagePaths.map(({ path, imageName }) => (
            <div key={imageName} className="h-36 bg-white  ">
              <img
                key={imageName}
                src={path}
                alt={imageName}
                className={`h-32 w-3/4 object-contain  text-center mt-2  m-auto `}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoSlider;
