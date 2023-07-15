import video from "../../assets/SaveInsta.App - 2776159580374425352.mp4";
import { Typewriter } from "react-simple-typewriter";
const Video = () => {
  return (
    <div className="h-screen w-full">
      <video
        className="-z-10 h-screen w-full object-cover mt-[4.6rem] md:mt-[5.5rem] lg:mt-[6.2rem]"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute h-full w-full top-0 flex flex-col justify-center items-center">
        <h1 className=" text-5xl  md:text-6xl lg:text-7xl p-3 text-white font-nunito ">
          Somos
        </h1>
        <span className="text-deep-purple-300 font-nunito font-bold text-[2.7rem] md:text-[3.5rem] lg:text-[4rem] text-shadow shadow-gray-300">
          <Typewriter
            words={[
              "Creative Monkey",
              "Profesionalismo",
              "Confianza",
              "Experiencia",
            ]}
            loop={true}
            cursor
            cursorStyle="."
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </span>
      </div>
    </div>
  );
};

export default Video;
