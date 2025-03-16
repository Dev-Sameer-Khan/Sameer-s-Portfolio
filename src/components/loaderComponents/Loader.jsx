import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "./CoutUp";

const languages = [
  "Hello",
  "नमस्कार",
  "مرحبًا",
  "Bonjour",
  "Hola",
  "Ciao",
  "Guten Tag",
  "こんにちは",
  "안녕하세요",
  "你好",
];

const Loader = ({ onLoaded }) => {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % languages.length);
    }, 2000);

    window.addEventListener("load", () => {
      setTimeout(() => setLoaded(true), 5000);
    });

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", () => {});
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-zinc-900 text-zinc-200 text-6xl font-[bold]"
      initial={{ y: 0 }}
      animate={loaded ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{ display: loaded ? "none" : "flex" }}
    >
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 1 }}
        className="shiny-text"
      >
        <h1 className="text-center mb-4">👋</h1>
        <Typewriter words={[languages[index]]} loop={1} typeSpeed={80} />
      </motion.div>
      <div className="absolute bottom-10 right-10">
        <CountUp to={100} className="text-zinc-200" />
      </div>
    </motion.div>
  );
};

export default Loader;
