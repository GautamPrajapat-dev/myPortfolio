import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Pages/Hero";
import Navbar from "./Pages/Navbar";
import About from "./Pages/About";
import { motion } from "framer-motion";
import Projects from "./Pages/Projects";
import ContactUs from "./Pages/ContactUs";
const App = () => {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
        }}
        className="fixed w-1/3 bg-purple-700 rounded-full left-72 top-26 h-2/3 blur-3xl -z-30"
      ></motion.div>
      <div className="fixed transition-transform translate-x-3 rounded-full bg-amber-700 h-96 w-96 top-1/3 left-3/4 blur-2xl -z-30"></div>

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
