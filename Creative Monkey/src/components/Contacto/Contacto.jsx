import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input, Textarea, Button, Alert } from "@material-tailwind/react";

const Contacto = () => {
  const form = useRef();
  const [submit, setSubmit] = useState(false);
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const isEmpty =
    input.user_name == "" || input.user_email == "" || input.message == "";
  const handleInputChange = (event) => {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;

    setInput({ ...input, [property]: value });
   
  };
  console.log(input);
  const Icon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    );
  };

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
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 3000);
    setInput({
      user_name: "",
      user_email: "",
      message: "",
    });
    e.target.reset();
  };
  console.log(input);
  console.log(isEmpty);
  return (
    <>
      <div className="flex flex-col items-center h-screen lg:h-[40rem] bg-neutral-800 lg: p-10">
        <div className=" m-10">
          <h2 className="font-quickSand font-medium  text-white text-3xl md:text-5xl ">
            Contacto
          </h2>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 lg:grid-cols-2  h-96 mt-10 text-xl lg:gap-10"
        >
          <div className="col-span-1 space-y-12  lg:w-96 text-xl  w-full p-5 lg:p-0">
            <Input
              variant="outlined"
              label="Nombre"
              color="purple"
              type="text"
              name="user_name"
              className="w-full h-[4rem] text-white"
              onChange={handleInputChange}
              required
            />

            <Input
              variant="outlined"
              label="Email"
              color="purple"
              type="email"
              name="user_email"
              className="w-full h-[4rem] text-white text-2xl"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-span-1 h-40 p-5 w-full lg:p-0">
            <Textarea
              label="Mensaje"
              name="message"
              className="lg:h-[8rem]  text-white font-quickSand "
              color="purple"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full space-y-10 p-2 lg:col-span-2 lg:p-0">
          <Button
            variant="gradient"
            color="white"
            type="submit"
            className={`${
              isEmpty ? "cursor-not-allowed" : "cursor-pointer"
            } w-full lg:col-span-2 h-[4rem] rounded-md font-quickSand  text-md gap-10 py-2 px-6  bg-white text-black font-bold`}
            disabled={isEmpty}
          >
            Enviar Mensaje
            <i className="fa-regular fa-paper-plane ml-5"></i>
          </Button>
          {submit ? (
            <>
              <Alert color="green" icon={<Icon />} className="rounded-none border-l-4 border-green-200 bg-green-600 font-medium text-white text-xl font-quickSand justify-center items-center lg:col-span-2">
                El mensaje se envió con exito!
              </Alert>
            </>
          ) : (
            <></>
          )}
          {isEmpty && (
            <Alert
              color="purple"
              icon={<Icon />}
              className="rounded-none border-l-4 border-deep-purple-200 bg-purple-900 font-medium text-white text-sm  lg:text-xl font-quickSand justify-center items-center lg:col-span-2"
            >
              Todos los campos deben ser rellenados.
            </Alert>
          )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Contacto;
