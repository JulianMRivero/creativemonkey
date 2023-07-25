import alquier from "../../assets/Ilustraciones Servicios/alquiler.svg"
import asesoria from "../../assets/Ilustraciones Servicios/asesoria.svg"
import audiovisuales from "../../assets/Ilustraciones Servicios/audiovisuales.svg"
import event from "../../assets/Ilustraciones Servicios/event.svg"
import momentos from "../../assets/Ilustraciones Servicios/momentos.svg"
import produccionesFoto from "../../assets/Ilustraciones Servicios/producciones fotograficas.svg"
import programing from "../../assets/Ilustraciones Servicios/programing.svg"
import streaming from "../../assets/Ilustraciones Servicios/streaming.svg"

const Servicios = () => {

  const servicios = [
    {
      id: 1,
      svg: audiovisuales,
      description:
      <>
      Producciones audiovisuales para videos institucionales, video clips,
      <br />
      cortometraje, largometrajes, etc.
    </>
    },
    {
      id: 2,
      svg: produccionesFoto,
      description:
        "Producciones audiovisuales para videosinstitucionales, video clips, cortometraje, largometrajes, etc",
    },
    {
      id: 3,
      svg: streaming,
      description:
        "Producciones audiovisuales para videosinstitucionales, video clips, cortometraje, largometrajes, etc",
    },
    {
      id: 4,
      svg: event,
      description:
        "Producciones audiovisuales para videosinstitucionales, video clips, cortometraje, largometrajes, etc",
    },
    {
        id: 5,
        svg: momentos,
        description:
          "Producciones audiovisuales para videosinstitucionales, video clips, cortometraje, largometrajes, etc",
      },
      {
        id: 6,
        svg: programing,
        description:
          "Producciones audiovisuales para videosinstitucionales, video clips, cortometraje, largometrajes, etc",
      },
      {
        id: 7,
        svg: asesoria,
        description:
          "Producciones audiovisuales para videosinstitucionales, video clips, cortometraje, largometrajes, etc",
      },
      {
        id: 8,
        svg: alquier,
        description:
          "Producciones audiovisuales para videosinstitucionales, video clips, cortometraje, largometrajes, etc",
      },
  ];
  return (
    <div className="min-h-screen  bg-gradient-to-b from-gray-50 to-slate-900">
      <div className="flex justify-center items-center">
        <h2 className="font-nunito font-medium  text-black text-5xl md:text-7xl mt-12">
          Servicios
        </h2>
      </div>
      <div className="flex justify-center items-center flex-col w-full mt-10 gap-10  lg:flex-col">
        {/* <h2 className="font-nunito font-medium  text-black ml-5 text-xl md:text-3xl text-center">Producciones audiovisuales para videosinstitucionales, video clips,<br/> cortometraje, largometrajes, etc</h2>
        <div>
            <img src={studio}/>
        </div> */}
        {servicios.map((servicio) => {
          return (
            <div
              key={servicio.id}
              className={`lg:gap-10 lg:flex lg:items-center lg:m-10 lg:flex-row ${
                servicio.id % 2 == 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <h2 className="font-nunito font-medium  text-black ml-5 text-xl md:text-4xl text-center">
                {servicio.description}
              </h2>
              <div className="mt-10 flex justify-center">
                <img src={servicio.svg} className="w-72 md:w-96 lg:w-[40rem]" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Servicios;
