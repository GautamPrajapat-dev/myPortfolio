import { FaLinkedin, FaPhone, FaYoutube } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import contactIcon from "../assets/contact-png.webp";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import HeaderText from "../Components/HeaderText";
import { motion } from "framer-motion";
const ContactUs = () => {
  const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <>
      <HeaderText text="Contact Us" />
      <div className="grid mt-6  gap-4 grid-cols-4 place-items-center   lg:h-[60vh]">
        <div className="col-span-4 md:col-span-2">
          <img
            src={contactIcon}
            alt="Contact Icon"
            width={360}
            loading="lazy"
          />
        </div>
        <div className="col-span-4 row-start-1 md:col-span-2">
          <motion.div
            variants={variants}
            animate="animate"
            initial="initial"
            className="flex flex-col items-center justify-center w-full gap-5"
          >
            {links.map((link, i) => {
              return (
                <motion.a
                  href={link.href}
                  key={i}
                  variants={variants}
                  className={`gap-2 flex items-center  w-full py-3  px-32 transition-colors duration-300 hover:bg-slate-50/10 md:text-xl text-center border rounded-md lg:px-52 `}
                >
                  {link.icon}
                  {link.name}
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

const links = [
  {
    name: "Email",
    icon: <IoMail />,
    hcolor: `orange`,
    href: "mailto:goutamprajapat554@gmail.com",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    hcolor: "red",
    href: "https://www.youtube.com/@mongomastery",
  },

  {
    name: "Linkdin",
    icon: <FaLinkedin />,
    hcolor: "blue",
    href: "https://www.linkedin.com/in/gautam-prajapat-mern-developer",
  },

  {
    name: "Call Now",
    icon: <FaPhone />,
    hcolor: "cyan",
    href: "tel:+917067587386",
  },
];
