import video from "../../assets/Miercoles Abel baja.mp4";
import { Typewriter } from "react-simple-typewriter";
const Video = () => {
  return (
    <div className="h-screen w-full border-t-4 border-purple-400">
      <video
        className="-z-10 h-screen w-full object-cover "
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute h-full w-full top-0 flex flex-col justify-center items-center ">
        <h1 className=" text-5xl  md:text-6xl lg:text-7xl p-3 text-white font-quickSand animate-fade-right animate-once animate-duration-1000 animate-delay-[1000ms] text-shadow shadow-neutral-900 ">
          Somos
        </h1>
        
        <span className=" text-white font-quickSand font-bold text-[2.7rem] md:text-[3.5rem] lg:text-[4rem] text-shadow shadow-purple-900">
          <Typewriter
            words={[
              "Creative Monkey",
              "Confianza",
              "Experiencia",
            ]}
            loop={true}
            cursor
            cursorStyle="."
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={3000}
          />
        </span>
      </div>
    </div>
  );
};

export default Video;
