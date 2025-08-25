import React from "react";
import Magnet from "../components/heroComponents/Magnet";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Hero = () => {
  useGSAP(() => {
    const title = SplitText.create(".one", { type: "chars" });
    const desc = SplitText.create(".two", { type: "chars" });

    gsap.fromTo(
      ".img",
      {
        y: 100,
        opacity: 0,
        blur : "100px"
      },
      {
        opacity: 1,
        y: 0,
        blur : "0px",
        ease: "none",
      },
      "+=0.1"
    );

    gsap.fromTo(
      title.chars,
      {
        y: 100,
        opacity: 0,
        blur : "100px"
      },
      {
        opacity: 1,
        y: 0,
        blur : "0px",
        stagger: "0.005",
        ease: "none",
      },
      "a"
    );
    gsap.fromTo(
      desc.chars,
      {
        y: 100,
        opacity: 0,
        blur : "100px"
      },
      {
        opacity: 1,
        y: 0,
        blur : "0px",
        stagger: "0.009",
        ease: "none",
      },
      "a"
    );
    gsap.fromTo(
      ".btn",
      {
        y: 100,
        opacity: 0,
        blur : "100px"
      },
      {
        opacity: 1,
        y: 0,
        blur : "0px",
        ease: "none",
      },
      "-=0.5"
    );
  }, []);

  return (
    <section className="w-full h-screen bg-black/50 absolute top-0 z-[99] pointer-events-none pt-20 max-[640px]:pt-10">
      <div className="flex w-full h-full gap-4 flex-col items-center justify-center text-white px-4 max-[640px]:px-2">
        <img
          src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1742119110/sam_logo_bs1syb.svg"
          alt="Profile"
          className="img will-change-transform w-30 h-30 rounded-full border-2 border-zinc-800 grayscale"
        />
        <p className="shiny-text text-md one will-change-transform">Hi, I'm Sameer Khan 👋</p>
        <p className="two will-change-transform text-[4vw] max-[640px]:text-[10vw] w-[55%] max-[640px]:w-full font-light text-center leading-tight shiny-text">
          Creating eye-catching designs, <br /> fluid interactions, and <br /> immersive web
          experiences.
        </p>

        <Magnet disabled={false} magnetStrength={20} className="cursor-pointer">
          <button className="btn will-change-transform mt-2 bg-zinc-900 px-6 py-2 rounded cursor-pointer pointer-events-auto">
            <a
              href="https://forms.gle/3uhToSZ5dmkgtC3c8"
              target="_blank"
              className="shiny-text"
            >
              Let’s create magic ↗
            </a>
          </button>
        </Magnet>
      </div>
    </section>
  );
};

export default Hero;
