import  { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import Background from "./components/heroComponents/Background";
import Navbar from "./components/Navbar";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ScrollVelocity from "./sections/ScrollVelocity";
import Cursor from "./components/Cursor";
import Loader from "./components/loaderComponents/Loader";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Certificates from "./sections/Certificates";
import About from "./sections/About";
import Works from "./sections/Works";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 5000);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Loader />
      ) : (
        <div className="relative overflow-hidden bg-[#0C0C0D] text-zinc-200">
          <Cursor />
          <Background />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Certificates />
          {/* <Projects /> */}
          <Works/>
          <Testimonials />
          <Contact />
          <ScrollVelocity
            texts={["Sameer Khan", "Three Js Developer"]}
            velocity={100}
            className="custom-scroll-text will-change-transform bg-[#0C0C0D] text-zinc-200 font-[bold] select-none"
          />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
