import React, { useState, useEffect, useRef } from "react";
import CircularText from "./heroComponents/CircularText";
import Magnet from "./heroComponents/Magnet";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 0) {
        setShowNavbar(true);
        return;
      }

      if (Math.abs(currentScrollY - lastScrollY.current) < 10) {
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    const debouncedHandleScroll = () => {
      setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    const navElement = document.querySelector(".mobile-nav");

    if (isOpen) {
      gsap.to(navElement, {
        rotate: -60,
        duration: 0.5,
        x: "165%",
        ease: "power2.out",
      });
    } else {
      gsap.to(navElement, {
        rotate: 0,
        duration: 0.5,
        x: "-0%",
        ease: "power2.out",
      });
    }
  };

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="fixed hidden max-[640px]:block w-full h-screen backdrop-blur-3xl top-0 z-[999] mobile-nav transition-transform duration-500 translate-x-full">
        <div className="links text-5xl w-full h-full flex items-center justify-center gap-6 flex-col">
          {[
            {
              name: "Instagram",
              url: "https://www.instagram.com/abhishek_gupta.ig/",
            },
            {
              name: "Linked In",
              url: "https://www.linkedin.com/in/abhishek-gupta-545aa2260/",
            },
            {
              name: "Github",
              url: "https://github.com/Code-With-Abhishek-Kumar",
            },
          ].map((link, index) => (
            <a
              href={link.url}
              target="_blank"
              key={index}
              className="shiny-text"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Top Navbar */}
      <nav
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-[9999] backdrop-blur-sm w-[90%] max-[640px]:w-full mx-auto max-[640px]:px-4 pt-2 flex items-center justify-between text-zinc-200 border-b-[1px] border-zinc-900 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div>
          <Magnet
            disabled={false}
            magnetStrength={20}
            className="cursor-pointer"
          >
            <CircularText
              text="*SAMEER*KHAN*"
              onHover="slowDown"
              spinDuration={10}
              className="custom"
            />
          </Magnet>
        </div>

        {/* Toggle Icons */}
        {isOpen ? (
          <MdOutlineClose
            onClick={toggleNav}
            size={36}
            className="text-white max-[640px]:block hidden cursor-pointer"
          />
        ) : (
          <RiMenu3Fill
            onClick={toggleNav}
            size={30}
            className="text-white max-[640px]:block hidden cursor-pointer"
          />
        )}

        <div className="links flex gap-2 -mt-4 max-[640px]:hidden">
          {[
            {
              name: "Instagram /",
              url: "https://www.instagram.com/dev.sameerkhan/",
            },
            {
              name: "Linked In /",
              url: "https://www.linkedin.com/in/dev-sameer-khan/",
            },
            {
              name: "Github",
              url: "https://github.com/Dev-Sameer-Khan",
            },
          ].map((link, index) => (
            <a href={link.url} target="_blank" key={index}>
              <Magnet
                disabled={false}
                magnetStrength={30}
                className="cursor-pointer"
              >
                {link.name}
              </Magnet>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
