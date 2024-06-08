import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container pt-4 mx-auto">
        <div className="overflow-hidden rounded-lg from-blue-400/30 to-slate-400/35 xl:mx-7">
          <div className="flex items-center justify-around px-3 py-5 ">
            <div>
              <div className="text-2xl font-bold ">MongoMastery</div>
            </div>
            <nav className="flex gap-4">
              <Link
                className="transition-colors ease-linear hover:text-purple-300"
                to="/myPortfolio"
              >
                Home
              </Link>
              <Link
                className="transition-colors ease-linear hover:text-purple-300"
                to="/myPortfolio/about"
              >
                About
              </Link>
              <Link
                className="transition-colors ease-linear hover:text-purple-300"
                to="/myPortfolio/projects"
              >
                Projects
              </Link>
              <Link
                className="transition-colors ease-linear hover:text-purple-300"
                to="/myPortfolio/contact"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
