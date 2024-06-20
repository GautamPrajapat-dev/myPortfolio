import { Route, Routes } from "react-router-dom";
import "./App.css";
import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import NotFound from "./Pages/NotFound";
// import Hero from "./Pages/Hero";
// import Navbar from "./Pages/Navbar";
// import About from "./Pages/About";
// import Projects from "./Pages/Projects";
// import ContactUs from "./Pages/ContactUs";
const Hero = lazy(() => import("./Pages/Hero"));
const Navbar = lazy(() => import("./Pages/Navbar"));
const About = lazy(() => import("./Pages/About"));
const Projects = lazy(() => import("./Pages/Projects"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const App = () => {
  // const { scrollYProgress } = useScroll();

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
      {/* <motion.div
        style={{
          scale: scrollYProgress,
          scaleX: 1.4,
          scaleY: 1.4,
        }}
        className="fixed hidden transition-transform translate-x-3 rounded-full lg:block max-md:right-0 bg-cyan-600 h-96 w-96 bottom-2 lg:-bottom-6 lg:-right-32 blur-3xl -z-30"
      ></motion.div> */}

      <Suspense
        fallback={
          <div className="absolute z-50 flex items-center justify-center w-full h-screen bg-gray-50 bg-opacity-40 ">
            <div className="w-12 loading">
              <div className="bg-purple-500 loading-spinner"></div>
            </div>
          </div>
        }
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
