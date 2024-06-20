import Footer from "./Footer";

const Projects = () => {
  return (
    <>
      <div className="text-4xl mt-[3%]  flex justify-center items-center w-full    uppercase">
        <div className="relative flex justify-center w-full mx-auto">
          <span className="left-0 ">Projects</span>
          <span className="absolute border-b-4 border-green-400 bottom-0 -rotate-[2deg] w-36 "></span>
        </div>
      </div>
      <div className="text-3xl text-center">
        This page Under the Development
      </div>
      <Footer />
    </>
  );
};

export default Projects;
