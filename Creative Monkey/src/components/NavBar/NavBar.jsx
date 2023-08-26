// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, MobileNav, IconButton } from "@material-tailwind/react";
import iso from "../../assets/creative logo.png";
import logo from "../../assets/LOGO BLANCO_CM.png";
import "./customstyles.css";
const NavBar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const links = [
    { title: "Home", path: "#home" },
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Servicios",
      path: "#servicios",
    },

    { title: "Trabajos", path: "/trabajos" },
    { title: "Contacto", path: "#contacto" },
  ];
  const links2 = [
    { title: "casa", path: "/" },
    {
      title: "nose",
      path: "/about",
    },

    { title: "Trabajos", path: "/trabajos" },
    { title: "Contacto", path: "/contacto" },
  ];

  const [openNav, setOpenNav] = useState(false);
  const navList = (
    <ul className=" mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-16">
      {links.map((link, i) => (
        <a
          href={link.path}
          key={i}
          className="a o text-white text-2xl px-3 py-4 font-medium  hover:text-gray-200 "
        >
          {link.title}
        </a>
      ))}
    </ul>
  );
  const navList2 = (
    <ul className=" mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links2.map((link, i) => (
        <Link
          to={link.path}
          key={i}
          className="a  text-white text-2xl px-3 py-4 font-medium  hover:text-gray-200 "
        >
          {link.title}
        </Link>
      ))}
    </ul>
  );
  return (
    <>
      <Navbar
        className={`fixed top-0  max-w-full rounded-none border-none  py-2 px-4 lg:px-8 lg:py-4 z-50 ${
          scrollPosition >= 750
            ? `bg-neutral-900 bg-opacity-90 `
            : "bg-opacity-10"
        }`}
      >
        <div className="lg:absolute">
          <Link to="/" className="cursor-pointer">
            <img src={logo} className="lg:w-36 lg:flex hidden" />
          </Link>
        </div>
        <div className="flex items-center justify-between lg:justify-center text-blue-gray-900">
          <div className="mr-4  py-1.5">
            <img src={iso} className="w-16 md:w-20 lg:hidden"></img>
          </div>

          <div className="flex items-center ">
            <div className="mr-4 hidden lg:block">
              {path === "/" ? navList : navList2}
            </div>

            <IconButton
              variant="text"
              className="ml-auto h-12 w-12 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} onClick={() => setOpenNav(!openNav)}>
          {navList}
        </MobileNav>
      </Navbar>
    </>
  );
};

export default NavBar;
