import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCertificate, FaTrophy } from "react-icons/fa";

const certificates = [
  {
    title: "Frontend Web Development",
    organization: "Gravity Coding",
    date: "May 2025",
    description:
      "Completed an intensive Frontend Web Development program at Gravity Coding, mastering modern web technologies and building interactive, responsive user interfaces. and Awwards level Web Experiences",
      credential: "https://www.linkedin.com/posts/dev-sameer-khan_frontenddevelopment-webdesign-html-activity-7333519352693981184-qP1n", 
    icon: <FaCertificate />,
  },
  {
    title: "React Developer",
    organization: "Gravity Coding",
    date: "May 2025",
    description:
      "Successfully completed the React Developer program at Gravity Coding, gaining hands-on experience with React, Redux Toolkit, and Tailwind CSS to build modern, scalable web applications.",
      credential: "https://www.linkedin.com/posts/dev-sameer-khan_reactjs-reduxtoolkit-tailwindcss-activity-7333520953554976773-QFuZ", 
    icon: <FaCertificate />,
  },
  {
    title: "Skillsvarz 1.0 Hackathon Finalist",
    organization: "Gravity Coding",
    date: "June 2025",
    description:
      "Finalist at Skillsvarz 1.0, a national-level hackathon organized by Gravity Coding, recognized for developing an Awwards level Creative Studio and demonstrating strong teamwork and technical skills.",
      credential: "https://www.linkedin.com/posts/dev-sameer-khan_skillsvarz-hackathonexperience-webdevelopment-activity-7332761528720375808-dMzM", 
    icon: <FaTrophy />,
  },
  {
    title: "GDG Solution Challenge Hackathon",
    organization: "Google Developer Groups (GDG) & Hack2Skill",
    date: "August 2025",
    description:
      "Received a Certificate of Achievement for participating in the GDG on Campus Solution Challenge, powered by Hack2Skill and Google Developer Groups (GDG). Developed an innovative AI-based idea to solve real-world problems and contribute towards creating a better future. The challenge provided an opportunity to collaborate, innovate, and showcase skills on a national platform.",
    credential: "https://www.linkedin.com/posts/dev-sameer-khan_googledevelopergroups-hack2skill-solutionchallenge-activity-7363979628778012676-47T3",
    icon: <FaTrophy />,
  },
  {
    title: "UI/UX Challenge",
    organization: "Gravity Coding",
    date: "October 2024",
    description:
      "Participated inthe UI/UX Design Competition hosted by Gravity Coding, demonstrating creative problem-solving and user-centered design skills.",
    credential: "https://www.linkedin.com/posts/dev-sameer-khan_uiux-designcompetition-gravitycoding-activity-7251224860687839233-QSWd",
    icon: <FaTrophy />,
  },
  {
    title: "HTML Challenge",
    organization: "Gravity Coding",
    date: "October 2024",
    description:
      "Secured top position in the HTML Challenge by Gravity Coding, showcasing strong HTML skills and attention to detail in web development.",
    credential: "https://www.linkedin.com/posts/dev-sameer-khan_gravitycoding-htmlchallenge-techcommunity-activity-7253743550830465026-57B8",
    icon: <FaTrophy />,
  },
  {
    title: "CSS Responsive Challenge",
    organization: "Gravity Coding",
    date: "January 2025",
    description:
      "Secured 3rd position in the CSS Responsive Challenge by Gravity Coding, standing out among hundreds of participants for responsive web design skills.",
      credential: "https://www.linkedin.com/posts/dev-sameer-khan_cssresponsivechallenge-gravitycoding-creativecoding-activity-7283160760602484736-KGE8", 
    icon: <FaTrophy />,
  },
];

const Certificates = () => {
  return (
    <div className="bg-[#0C0C0D] text-zinc-200 font-[bold] px-10 max-[640px]:px-4 py-30 max-[640px]:py-0">
      <h2 className="text-5xl text-center max-[640px]:text-4xl font-[bold] pl-10 max-[640px]:pl-0 mb-10 shiny-text">
        🏅 Certificates & Achievements 🎯
      </h2>
      <VerticalTimeline>
        {certificates.map((certificate, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#111", color: "#e4e4e7" }}
            contentArrowStyle={{ borderRight: "7px solid  #111" }}
            date={certificate.date}
            iconStyle={{ background: "#111", color: "#fff" }}
            icon={certificate.icon}
          >
            <h3 className="vertical-timeline-element-title text-xl font-[semibold]">
              {certificate.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-zinc-400 font-[medium]">
              {certificate.organization}
            </h4>
            <p className="font-[regular] text-gray-100">
              {certificate.description}
              {certificate.credential && (
                <a
                  href={certificate.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-50 hover:underline ml-2 font-semibold"
                >
                  View Credential
                </a>
              )}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Certificates;
