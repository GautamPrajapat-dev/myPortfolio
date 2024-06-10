import contactIcon from "../assets/contact-png.png";
const ContactUs = () => {
  return (
    <div>
      <div className="text-4xl mt-[3%]  flex justify-center items-center w-full    uppercase">
        <div className="relative flex justify-center w-full mx-auto">
          <span className="left-0 ">Contact Us</span>
          <span className="absolute border-b-4 border-green-400 bottom-0 -rotate-[2deg] w-36 "></span>
        </div>
      </div>
      <div>
        <div>
          <img src={contactIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
