import React from "react";
import Magnet from "../components/heroComponents/Magnet";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-black/50 absolute top-0 z-[99] pointer-events-none pt-20 max-[640px]:pt-10">
      <div className="flex w-full h-full gap-4 flex-col items-center justify-center text-white px-4 max-[640px]:px-2">
        <img
          src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1742119110/sam_logo_bs1syb.svg"
          alt="Profile"
          className="w-30 h-30 rounded-full border-2 border-zinc-800 grayscale"
        />
        <p className="shiny-text text-md">Hi, I'm Sameer Khan 👋</p>
        <p className="text-[4vw] max-[640px]:text-[10vw] w-[55%] max-[640px]:w-full font-light text-center leading-tight shiny-text">
        Creating eye-catching designs, fluid interactions, and immersive web experiences.
        </p>

        <Magnet disabled={false} magnetStrength={20} className="cursor-pointer">
          <button className="mt-2 bg-zinc-900 px-6 py-2 rounded cursor-pointer pointer-events-auto">
            <a
              href="https://forms.gle/ykHXiUHfuEsFLcrq9"
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
