import Cards from "../Components/Cards";
import Footer from "./Footer";

const projects = [
  {
    name: "Flipkart Clone",
    img: "./mongomastery.png",
    link: "https://github.com/goutamprajapat/FLIPKART_CLONE",
    linkName: "show more",
    subHeading: "Frontend & Backend",
    sp: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus ab vitae obcaecati commodi enim, laborum maiores itaque natus numquam quidem.",
  },
  {
    name: "Cv Portflio",
    img: "./images/cv.png",
    link: "https://goutamprajapat.github.io/Cv_portfolio/",
    linkName: "Preview",
    subHeading: "html/Css/JavaScript",
    sp: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus ab vitae obcaecati commodi enim, laborum maiores itaque natus numquam quidem.",
  },
  {
    name: "Cv Portflio",
    img: "./images/cv.png",
    link: "https://goutamprajapat.github.io/Cv_portfolio/",
    linkName: "Preview",
    subHeading: "html/Css/JavaScript",
    sp: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus ab vitae obcaecati commodi enim, laborum maiores itaque natus numquam quidem.",
  },
  {
    name: "Cv Portflio",
    img: "./images/cv.png",
    link: "https://goutamprajapat.github.io/Cv_portfolio/",
    linkName: "Preview",
    subHeading: "html/Css/JavaScript",
    sp: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus ab vitae obcaecati commodi enim, laborum maiores itaque natus numquam quidem.",
  },
];
const Projects = () => {
  return (
    <>
      <div className="text-4xl mt-[3%]  flex justify-center items-center w-full    uppercase">
        <div className="relative flex justify-center w-full mx-auto">
          <span className="left-0 ">Projects</span>
          <span className="absolute border-b-4 border-green-400 bottom-0 -rotate-[2deg] w-36 "></span>
        </div>
      </div>
      <div className="grid w-11/12 mx-auto mt-6 gap-y-12 place-items-center w place-content-center md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, index) => {
          return (
            <Cards
              key={index}
              imgs={p.img}
              heading={p.name}
              links={p.link}
              linkName={p.linkName}
              subHeading={p.subHeading}
            >
              <span className="line-clamp-4">{p.sp}</span>
            </Cards>
          );
        })}
      </div>
      {/* <div className="text-3xl text-center">
        This page Under the Development
      </div> */}
      <Footer />
    </>
  );
};

export default Projects;
