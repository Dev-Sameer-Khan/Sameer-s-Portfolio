import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "CIITM College Website",
    description:
      "A comprehensive MERN stack application designed to provide an efficient and interactive platform for students, faculty, and administrators. It features a robust backend, a seamless user interface, and a dynamic content management system.",
    features: [
      "🎓 Student Panel – Access courses, assignments, and academic records.",
      "🛠️ Admin Dashboard – Manage students, faculty, and website content with ease.",
      "🔐 Secure Authentication – Role-based access control for students and admins.",
      "⚡ High-Performance UI – Built with React, Tailwind CSS, and React Router DOM.",
      "📡 RESTful API Integration – Developed using Node.js, Express, and MongoDB.",
      "🌍 Fully Deployed – Live on Render and integrated with a custom domain.",
    ],
    techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    links: {
      frontendRepo: "https://github.com/Coder-Studies/ciitm-frontend",
      backendRepo: "https://github.com/Coder-Studies/Ciitm-Backend",
      liveSite: "https://www.growrichmindset.in/",
      backendAPI: "https://ciitm-backend.onrender.com/",
    },
    video: "https://www.pexels.com/download/video/2516160/",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sliderRef.current, {
        x: () => -sliderRef.current.scrollWidth + window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${sliderRef.current.scrollWidth - window.innerWidth}`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[200vw] max-[640px]:w-[350vw] min-h-screen overflow-hidden bg-[#0C0C0D] flex items-center"
    >
      <h2 className="absolute top-10 left-[20%] max-[640px]:left-[3.5%] text-5xl font-[bold] text-gray-100 z-10 shiny-text">
        My Projects 🚀
      </h2>
      <div
        ref={sliderRef}
        className="flex h-full items-center will-change-transform"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-[150vw] max-[640px]:w-[300vw] flex flex-col items-center justify-center"
          >
            <div className="h-screen flex items-center justify-evenly gap-10 pt-20 px-20 max-[640px]:px-6">
              <video
                src={project.video}
                autoPlay
                loop
                muted
                className="w-[70%] max-[640px]:w-[30%] h-[80%] max-[640px]:h-[60%] object-cover rounded-xl shadow-lg border border-white/20"
              />
              <div className="text-center text-white font-[semibold] px-6 py-6 bg-[#121212]/30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg mt-2">
                <h4 className="text-3xl text-[#C02F17] shiny-text">
                  {project.title}
                </h4>
                <p className="mt-3 text-gray-300">{project.description}</p>
                <ul className="mt-4 pl-4 text-left text-gray-400 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h3 className="text-lg font-[semibold]">Tech Stack:</h3>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 backdrop-blur-md rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <a
                    href={project.links.frontendRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600/50 backdrop-blur-md hover:bg-blue-500 rounded-lg text-white"
                  >
                    Frontend Repo
                  </a>
                  <a
                    href={project.links.backendRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600/50 backdrop-blur-md hover:bg-green-500 rounded-lg text-white"
                  >
                    Backend Repo
                  </a>
                  <a
                    href={project.links.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600/50 backdrop-blur-md hover:bg-purple-500 rounded-lg text-white"
                  >
                    Live Website
                  </a>
                  <a
                    href={project.links.backendAPI}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-orange-600/50 backdrop-blur-md hover:bg-orange-500 rounded-lg text-white"
                  >
                    Backend API
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
