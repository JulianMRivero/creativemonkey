import NavBar from "../NavBar/NavBar";
import Video from "../Video/Video";
import About from "../About/About";
import LogoSlider from "../LogoSlider/LogoSlider";
import Servicios from "../Servicios/Servicios";
const Home = () => {
  return (
    <>
      <div className="h-screen min-w-full bg-cover bg-blackCM">
        <NavBar />
        <a id="home" className="scroll-m-[10ex]" />
        <div>
          <Video />
        </div>
        <a id="about" className="scroll-m-[10ex]" />
        <section className="min-h-screen min-w-full flex justify-center items-center bg-whiteCM">
          <About />
        </section>
        <section>
        <LogoSlider/>
        </section>
        <section>
          <Servicios/>
        </section>
      </div>
    </>
  );
};

export default Home;
