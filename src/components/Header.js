import React, { useState, useEffect } from "react";

//Logo
import logoWhite from "../assets/images/hotels/LogoWhite.png";
import logoDark from "../assets/images/hotels/LogoDark.png";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-colors duration-500 ${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      }`}
    >
      <div
        className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between 
      lg:gap-y-0"
      >
        {/* Logo */}
        <a href="/">
          <img
            className="w-[150px] transition-all duration-500"
            src={header ? logoDark : logoWhite}
          />
        </a>

        {/* Navegación */}
        <nav
          className={`transition-colors duration-500 ${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase  lg:gap-x-8`}
        >
          <a href="#" className="hover:text-accent transition">
            Home
          </a>
          <a href="#" className="hover:text-accent transition">
            Rooms
          </a>
          <a href="#" className="hover:text-accent transition">
            Restaurant
          </a>
          <a href="#" className="hover:text-accent transition">
            Spa
          </a>
          <a href="#" className="hover:text-accent transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
