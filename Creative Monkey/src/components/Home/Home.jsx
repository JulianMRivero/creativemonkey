import NavBar from "../NavBar/NavBar";
import Video from "../Video/Video";
import About from "../About/About";
import LogoSlider from "../LogoSlider/LogoSlider";
import Servicios from "../Servicios/Servicios";
import Contacto from "../Contacto/Contacto";
import SpeedDialcm from "../SpeedDialCM/SpeedDialfixed";

const Home = () => {
  return (
    <>
      <SpeedDialcm />
      <div>
        <NavBar />
      </div>
      <a id="home" className="scroll-m-[10ex]" />
      <div>
        <Video />
      </div>
      <a id="about" className="scroll-m-[10ex]" />
      <section className="min-h-screen min-w-full flex justify-center items-center bg-whiteCM">
        <About />
      </section>
      <section>
        <LogoSlider />
      </section>
      <a id="servicios" className="scroll-m-[10ex]" />
      <section>
        <Servicios />
      </section>
      <a id="contacto" className="scroll-m-[10ex]" />
      <section>
        <Contacto />
      </section>
    </>
  );
};

export default Home;
