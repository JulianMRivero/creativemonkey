import {
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";

import isologo from "../../assets/creative logo.png";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import whatsapp from "../../assets/whatsapp.svg";

const SpeedDialcm = () => {
  
  return (
    <div className="fixed bottom-5 right-5  z-10 ">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <button className=" flex justify-center items-center rounded-full w-14 h-14 lg:w-20 lg:h-20 bg-neutral-900 border-blue-gray-50  shadow-md hover:shadow-black">
              <img
                src={isologo}
                className="w-12 justify-center transition-transform group-hover:rotate-12"
              />
            </button>
          </SpeedDialHandler>
          <SpeedDialContent className="flex items-center justify-evenly rounded-full h-52 w-16 border border-deep-purple-900 bg-white shadow-md shadow-black">
            <SpeedDialAction className="bg-whiteCM w-4">
              <a href="https://www.youtube.com/">
                <img src={whatsapp} />
              </a>
            </SpeedDialAction>
            <SpeedDialAction className="bg-whiteCM">
              <a href="https://www.instagram.com/creativemonkeyok/">
                <img src={instagram} />
              </a>
            </SpeedDialAction>
            <SpeedDialAction className="bg-whiteCM">
              <a href="https://www.youtube.com/watch?v=LZuTQGdZDUA">
                <img src={youtube} />
              </a>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
};

export default SpeedDialcm;
