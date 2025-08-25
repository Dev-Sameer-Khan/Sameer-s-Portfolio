
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const works = [
  {
    name: "Aditya's Portfolio",
    link: "https://itsadi.me",
    img: "https://www.itsadi.me/api/song-art?file=Gigi%20Perez%20-%20Sailor%20Song%20(Lyrics).jpeg",
    category: "Web Animations",
    year: "2025"
  },
  {
    name: "Visualab Studio",
    link: "https://www.visualab.studio/",
    img: "https://res.cloudinary.com/dbgzq41x2/image/upload/v1745601729/Rectangle_10_1_ekmabg.png",
    category: "Creative Studio",
    year: "2025"
  },
  {
    name: "Growess Group",
    link: "https://growess.vercel.app/",
    img: "https://res.cloudinary.com/dq6btiqs0/image/upload/v1749031239/mission_rjersu.png",
    category: "Deigital Agency",
    year: "2025"
  },
  {
    name: "YesPreet Salon",
    link: "https://yespreet.com/",
    img: "https://res.cloudinary.com/dbgzq41x2/image/upload/v1756119309/Banner_uaonyf.jpg",
    category: "E-commerce Website",
    year: "2025"
  },
  {
    name: "GDG on Campus Solution 2025",
    link: "https://amalgum.netlify.app/",
    img: "https://amalgum.netlify.app/images/bg1.webp",
    category: "Hackathon",
    year: "2025"
  },
  
];


const Works = () => {

  useEffect(() => {
    (gsap.utils.toArray(".work-item")).forEach((item) => {
      const name = item.querySelector(".work-item-name h1");
      const img = item.querySelector(".work-item-img");
      if (!name) return;

      // @ts-ignore
      const split = SplitText.create(name, { type: "chars", mask: "chars" });

      gsap.set(split.chars, {
        y: "125%",
      });

      split.chars.forEach((chars, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: `top+=${index * 25 - 350} top`,
          end: `top+=${index * 25 - 350} top`,
          scrub: 1,
          animation: gsap.fromTo(
            chars,
            {
              y: "125%",
            },
            {
              y: 0,
              ease: "none",
            }
          ),
        });
      });

      ScrollTrigger.create({
        trigger: item,
        start: "top bottom",
        end: "top top",
        scrub: 0.5,
        animation: gsap.fromTo(
          img,
          {
            clipPath: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "none",
          }
        ),
      });

      ScrollTrigger.create({
        trigger: item,
        start: "bottom bottom",
        end: "bottom top",
        scrub: 0.5,
        animation: gsap.fromTo(
          img,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)",
            ease: "none",
          }
        ),
      });
    });
  }, []);


  useGSAP(() => {
    const title = SplitText.create(".seven", { type: "chars" });


    gsap.fromTo(
      title.chars,
      {
        y: 100,
        opacity: 0,
        blur: "100px"
      },
      {
        opacity: 1,
        y: 0,
        blur: "0px",
        stagger: 0.005,
        ease: "none",
        scrollTrigger: {
          trigger: ".seven",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  return (
    <>
          <h2 className="text-center seven will-change-transform text-5xl font-[bold] text-gray-100 z-10 shiny-text mb-10 max-[599px]:mt-10">
        Selected Works 🚀
      </h2>
      {works.map((work, idx) => (
        <div
          key={idx}
          className="work-item min-h-screen w-full relative overflow-hidden group"
        >

          <div
            className="work-item-img absolute w-full h-full will-change-[clip-path] group-hover:scale-105 transition-transform duration-700"
            style={{
              clipPath: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)",
            }}
          >
            <img
              className="w-full h-full object-cover scale-110 grayscale-100"
              src={work.img}
              alt={work.name}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
          </div>
          
          <div className="work-item-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-[1]">
            <div className="text-center">
              <h1 className="uppercase font-semibold leading-[1] will-change-transform text-[1.5rem] xs:text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] text-white drop-shadow-lg group-hover:scale-105 transition-transform duration-500 px-3 sm:px-4">
                {work.name}
              </h1>
              <div className="mt-3 sm:mt-4 opacity-0 max-[1025px]:opacity-100 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white/80 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{work.category}</p>
                <p className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-3">{work.year}</p>
                <a href={work.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur rounded-full text-white text-xs sm:text-sm">
                  <span>View Project</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Works;
