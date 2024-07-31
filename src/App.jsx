import { Route, Routes } from "react-router-dom";
import "./App.css";
import { domAnimation, LazyMotion, motion } from "framer-motion";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import NotFound from "./Pages/NotFound";

const Hero = lazy(() => import("./Pages/Hero"));
const About = lazy(() => import("./Pages/About"));
const Projects = lazy(() => import("./Pages/Projects"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));

import WAVES from "vanta/dist/vanta.waves.min";
import Layout from "./Pages/Layout";
import { useFollowPointer } from "./Hooks/useFollowPointer";
const App = () => {
  const cur = useRef(null);
  const { x, y } = useFollowPointer(cur);
  // const { scrollYProgress } = useScroll();
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x40506,
          waveSpeed: 0.25,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <LazyMotion features={domAnimation}>
        <div
          ref={myRef}
          className="fixed top-0 w-full h-screen -z-50"
          id="bg"
        ></div>
        <motion.div
          ref={cur}
          style={{ x, y }}
          className="fixed rounded-full -left-12 bg-green-yellow-600 -z-50 w-14 h-14"
        ></motion.div>

        <Suspense
          fallback={
            <div className="fixed top-0 z-50 flex items-center justify-center w-full h-screen bg-gray-900 bg-opacity-40 ">
              <div className="w-12 loading">
                <div className="bg-purple-500 loading-spinner"></div>
              </div>
            </div>
          }
        >
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </LazyMotion>
    </>
  );
};

export default App;
