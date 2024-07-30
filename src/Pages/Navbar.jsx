import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import a from "../assets/animate.webp";
import r from "../assets/animate-ring.webp";
import { motion } from "framer-motion";
const Navbar = () => {
  const navList = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "projects", path: "/projects" },
    { link: "Contact Us", path: "/contact" },
  ];
  const [toggle, setToggle] = useState(false);

  const clipvariants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(15px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    spin: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 5,
      },
    },
  };
  const variantsNav = {
    open: { transition: { staggerChildren: 0.1 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <>
      <div className="container pt-4 mx-auto">
        <div className="overflow-hidden rounded-lg from-blue-400/30 to-slate-400/35 xl:mx-7">
          <div className="flex items-center justify-around px-3 py-5 ">
            <div className="text-2xl font-bold lg:text-2xl">MongoMastery</div>
            <div
              className="flex items-center justify-center text-xl font-bold cursor-pointer top-11 left-10 lg:hidden"
              onClick={() => setToggle(!toggle)}
            >
              {!toggle ? <FaBars /> : <FaTimes />}
            </div>
            <nav className="hidden lg:flex">
              <ul className="flex items-center gap-4">
                {navList.map((link, i) => {
                  return (
                    <li key={i}>
                      <Link to={link.path}>{link.link}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <motion.div
            variants={clipvariants}
            animate={toggle ? "open" : "closed"}
            className={
              toggle
                ? `fixed  overflow-hidden  z-30 w-64 py-4 font-bold rounded-lg backdrop-blur-2xl bg-black/10  top-0 left-0 bottom-0   transition-transform  border-r ease-linear `
                : "py-4 hidden lg:block   transition-transform   ease-linear"
            }
          >
            <div className="absolute rotate-45 lg:hidden -top-16">
              <img src={a} alt="image" loading="lazy" />
            </div>
            <div className="absolute rotate-45 lg:hidden bottom-12 -left-12">
              <img src={r} alt="ring" loading="lazy" />
            </div>
            <motion.nav
              variants={variantsNav}
              animate={toggle ? "open" : "closed"}
              className="absolute flex flex-col items-center gap-6 left-1/3 top-1/3 lg:flex-row"
            >
              {navList.map((nav, i) => {
                return (
                  <motion.div
                    key={i}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    <Link
                      className="capitalize transition-colors ease-linear hover:text-purple-300"
                      to={nav.path}
                      onClick={() => setToggle(false)}
                    >
                      {nav.link}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>
          </motion.div>
        </div>
      </div>
      {toggle && (
        <div
          className="absolute top-0 bottom-0 z-20 w-full bg-black/60 "
          onClick={() => setToggle(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
