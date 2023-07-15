import NavBar from "../NavBar/NavBar";
import Video from "../Video/Video";

const Home = () => {
  return (
    <>
      <div className="bg-gray-900 h-screen min-w-screen bg-cover ">
        <NavBar />
        <a id="home" className="scroll-m-[10ex]" />
       <div >
        <Video />
      </div>
        <a id="about" className="scroll-m-[10ex]" />
        <section className="scroll-m-10 text-xl p-10 h-full  bg-gradient-to-b from-gray-800 to-deep-purple-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          ut est vitae totam quos amet deleniti tenetur placeat quia atque.
          Voluptates repellat ullam saepe totam debitis dignissimos, cum
          voluptate laboriosam.
        </section>
      </div>
    </>
  );
};

export default Home;
