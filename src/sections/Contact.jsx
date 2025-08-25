import { useRef} from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDownload,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Contact = () => {
  const sectionRef = useRef();

  // Remove local state for form fields, let Formspree handle form data
  const [state, handleSubmit] = useForm("xqadzjbk"); // Use only the form key, not the full URL

  const socialLinks = [
    {
      icon: <FaEnvelope />,
      url: "mailto:khansameer84233@gmail.com",
      color: "#EA4335",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/918957148964",
      color: "#25D366",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/dev.sameerkhan/",
      color: "#E4405F",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/dev-sameer-khan/",
      color: "#0077B5",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/Dev-Sameer-Khan",
      color: "#ffff",
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/Sameer_8teen",
      color: "#1DA1F2",
    },
  ];

  if (state.succeeded) {
    return (
      <section
        ref={sectionRef}
        className="relative bg-[#0C0C0D] text-white min-h-screen w-full flex flex-col items-center justify-center px-10 max-[640px]:px-6 py-20 overflow-hidden"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Thank you!</h2>
          <p className="text-xl">Your message has been sent. I&apos;ll get back to you soon.</p>
        </div>
      </section>
    );
  }

  useGSAP(() => {
    const title = SplitText.create(".nine", { type: "chars" });


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
          trigger: ".nine",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(
      ".left",
      {
        x: -100,
        opacity: 0,
        blur: "100px"
      },
      {
        opacity: 1,
        x: 0,
        blur: "0px",
        stagger: 0.001,
        ease: "none",
        scrollTrigger: {
          trigger: ".left",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(
      ".right",
      {
        x: 100,
        opacity: 0,
        blur: "100px"
      },
      {
        opacity: 1,
        x: 0,
        blur: "0px",
        stagger: 0.001,
        ease: "none",
        scrollTrigger: {
          trigger: ".right",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0C0C0D] text-white min-h-screen w-full flex flex-col items-center justify-center px-10 max-[640px]:px-6 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10 mix-blend-soft-light" />

      <div className="relative z-20 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl max-[640px]:text-4xl font-[bold] shiny-text nine will-change-transform">
            🚀 Let&apos;s Create Something Amazing! ✨🔥
          </h2>
          <p className="text-xl mt-4 shiny-text nine will-change-transform">
            Your vision, our code - let&apos;s build the future together
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-container left backdrop-blur-3xl rounded-3xl border border-white/10 p-8 shadow-2xl flex-1"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="floating-input-group">
                <input
                  type="text"
                  name="name"
                  className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none transition-all"
                  placeholder="Your Name ✍️"
                  required
                />
              </div>

              <div className="floating-input-group">
                <input
                  type="email"
                  name="email"
                  className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none transition-all"
                  placeholder="Email 📧"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="floating-input-group Mobile">
                <input
                  name="phone"
                  type="text"
                  pattern="^[0-9+ ]*$"
                  className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none transition-all"
                  placeholder="Your Phone Number  📞"
                />
              </div>

              <div className="floating-input-group">
                <textarea
                  name="message"
                  rows="4"
                  className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none transition-all"
                  placeholder="Message 💬"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] hover:from-[#2d2d2d] hover:to-[#1a1a1a] p-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 transition-all"
              >
                <span className="text-xl">🚀</span>
                {state.submitting ? "Sending..." : "Launch Message"}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8 flex-1 right"
          >
            <div className="glass-container backdrop-blur-3xl rounded-3xl border border-white/10 p-8 h-full shadow-2xl">
              <div className="space-y-10">
                <div className="group">
                  <h3 className="text-3xl font-bold flex items-center gap-3 mb-4">
                    <span className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] p-3 rounded-lg">
                      <FaEnvelope />
                    </span>
                    Direct Line
                  </h3>
                  <a
                    href="mailto:khansameer84233@gmail.com"
                    className="text-xl hover:text-white/70 transition-colors flex items-center gap-2"
                  >
                    khansameer84233@gmail.com
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </a>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-6">
                    Digital Playground
                  </h3>
                  <div className="flex flex-wrap items-center gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all text-4xl flex items-center justify-center flex-1 min-w-[150px] max-[640px]:min-w-[100px]"
                        style={{ color: link.color }}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <a
                  href="https://drive.google.com/file/d/1O_cy1mXhSkjfb__G2ocCc22E3pOc6u7O/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ y: -3 }}
                    className="w-full bg-white/5 hover:bg-white/20 p-4 rounded-xl flex items-center justify-center gap-3 text-lg font-bold transition-colors cursor-pointer"
                  >
                    <FaDownload className="text-xl" />
                    Get My Blueprint
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
