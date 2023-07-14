import video from "../../assets/SaveInsta.App - 2776159580374425352.mp4";
const Video = () => {
  return (
    <>
      <video className="h-screen min-w-full object-cover " autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default Video;
