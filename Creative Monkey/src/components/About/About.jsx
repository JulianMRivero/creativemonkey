import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import wave from "../../assets/wave.svg";
const About = () => {
  return (
    <div className="bg-whiteCM min-h-screen min-w-full flex flex-col items-center space-y-10  border-none relative">
      <div className="mb-10 ">
        <div className="flex justify-center items-center w-full  mt-14 h-36 lg:mt-20">
          <Card className="h-full flex justify-center shadow-md shadow-slate-800 text-center bg-blackCM  w-[22rem] md:w-[35rem] lg:w-3/4 lg:-mt-14 ">
            <Typography
              variant="h2"
              color="white"
              className="font-quickSand font-semibold md:text-[45px] lg:text-[60px] lg:tracking-widest"
            >
              Sobre <br className="lg:hidden" /> Creative Monkey
            </Typography>
          </Card>
        </div>
        <div className="mt-10  ">
          <Card className="max-w-[23rem]  overflow-hidden md:max-w-[40rem] lg:max-w-full xl:h-[30rem] lg:m-10 lg:flex lg:flex-row lg:justify-center lg:items-center z-10">
            <CardHeader
              floated={true}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none lg:h-full "
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
                className="lg:h-full lg:w-[90rem] object-cover"
              />
            </CardHeader>

            <CardBody>
              <Typography
                variant="lead"
                color="black"
                className="mt-3 font-semibold font-quickSand text-2xl"
              >
                Somos una empresa de producción integral de eventos,
                producciones audiovisuales y fotográficas que fue fundada en
                2020. Con un equipo de jóvenes emprendedores con amplia
                experiencia en el rubro, en el que cada miembro aporta sus
                habilidades específicas para brindar un servicio completo y de
                calidad a nuestros clientes. Nos hemos establecido como un
                proveedor confiable y versátil en el campo de los eventos y
                producciones.
              </Typography>
              <Typography
                variant="lead"
                color="black"
                className="mt-3 font-semibold font-quickSand text-2xl"
              >
                En cuanto a los servicios que ofrecemos, nos destacamos por la
                capacidad para gestionar cualquier tipo de evento, y encargarnos
                de toda la planificación, diseño y logística necesarios para
                llevar a cabo eventos y producciones de alta calidad.
              </Typography>
              <Typography
                variant="lead"
                color="black"
                className="mt-3 font-semibold font-quickSand text-2xl"
              >
                Con sede en la ciudad de Salta Capital, Creative Monkey opera en
                toda la provincia, lo que nos permite atender a una amplia
                variedad de clientes y eventos.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className=" absolute min-w-full bottom-0 right-0 -z-0">
        <img src={wave} />
      </div>
    </div>
  );
};

export default About;
