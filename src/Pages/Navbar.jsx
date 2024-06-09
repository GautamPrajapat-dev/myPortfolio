import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="container pt-4 mx-auto">
        <div className="overflow-hidden rounded-lg from-blue-400/30 to-slate-400/35 xl:mx-7">
          <div className="flex items-center justify-around px-3 py-5 ">
            <div>
              <div className="text-2xl font-bold lg:text-2xl">MongoMastery</div>
            </div>
            <div
              className="flex items-center justify-center text-xl font-bold lg:hidden"
              onClick={() => setToggle(!toggle)}
            >
              {!toggle ? <FaBars /> : <FaTimes />}
            </div>
            <div
              className={
                toggle
                  ? `absolute z-30 w-56 py-4 font-bold rounded-lg backdrop-blur-xl bg-black/60  top-24 right-7 md:right-24 px-9 transition-transform ease-linear `
                  : "absolute lg:relative max-lg:-left-96 transition-transform ease-linear"
              }
            >
              <nav className="flex flex-col gap-6 max-lg:items-end lg:flex-row ">
                <Link
                  className="transition-colors ease-linear hover:text-purple-300"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="transition-colors ease-linear hover:text-purple-300"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="transition-colors ease-linear hover:text-purple-300"
                  to="/projects"
                >
                  Projects
                </Link>
                <Link
                  className="transition-colors ease-linear hover:text-purple-300"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
