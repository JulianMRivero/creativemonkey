import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input, Textarea, Button } from "@material-tailwind/react";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e1r0b49",
        "template_feh9br7",
        form.current,
        "O7jgSb2G6PiunQMKB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
    <div className="flex flex-col items-center h-screen bg-blackCM">
      <div className=" m-10">
        <h2 className="font-quickSand font-medium  text-white text-3xl md:text-5xl ">
          Contacto
        </h2>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-96 mt-10"
      >
        <div className="col-span-1 space-y-12 w-72 lg:w-96">
          <Input
            variant="outlined"
            label="Nombre"
            color="indigo"
            type="text"
            name="user_name"
            className="h-[4rem] text-white"
            labelProps={{
              className: "font-quickSand  text-white",
            }}
            required
          />

          <Input
            variant="outlined"
            label="Email"
            color="indigo"
            type="email"
            name="user_email"
            className="h-[4rem] text-white text-2xl"
            labelProps={{
              className: "font-quickSand  text-white",
            }}
            required
          />
        </div>
        <div className="col-span-1 h-40">
          <Textarea
            label="Mensaje"
            className="h-[8rem]  text-white font-quickSand "
            color="indigo"
            labelProps={{
              className: "font-quickSand  text-white",
            }}
            required
          />
        </div>

        <Button
          variant="gradient"
          color="white"
          className="col-span-1 lg:col-span-2 h-[4rem] rounded-md font-quickSand font-bold text-md gap-10"
        >
          <input type="submit" value="Enviar Mensaje" />
          <i className="fa-regular fa-paper-plane ml-5" ></i>
        </Button>
      </form>
    </div>
      
    </>
  );
};

export default Contacto;
