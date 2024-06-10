import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Pages/Hero";
import Navbar from "./Pages/Navbar";
import About from "./Pages/About";
import { motion } from "framer-motion";
import Projects from "./Pages/Projects";
import ContactUs from "./Pages/ContactUs";
import { useScroll } from "framer-motion";
const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        animate={{
          scale: [0, 2.5],
          transition: {
            duration: 2,
          },
        }}
        className="fixed bg-purple-700 rounded-full w-96 left-3 lg:left-72 lg:blur-3xl top-26 h-96 -z-30"
      ></motion.div>
      <motion.div
        style={{
          scale: scrollYProgress,
          scaleX: 1.4,
          scaleY: 1.4,
        }}
        className="fixed hidden transition-transform translate-x-3 rounded-full lg:block max-md:right-0 bg-cyan-600 h-96 w-96 bottom-2 lg:-bottom-6 lg:-right-32 blur-3xl -z-30"
      ></motion.div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
