/* eslint-disable react/prop-types */

const Cards = ({
  imgs,
  heading,
  subHeading,
  children,
  links,
  linkName = "link",
  classMain,
}) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mx-auto ">
          <div
            className={`flex flex-col gap-3 p-4 bg-white rounded-md ${classMain}`}
          >
            <div className="overflow-hidden border border-gray-400 rounded-md img">
              <img className="" src={imgs} alt={imgs} />
            </div>
            <div className="flex flex-col gap-3 ">
              <div>
                <h1 className="text-2xl font-bold text-black ">{heading}</h1>
                <h6 className="text-sm font-light text-slate-700">
                  {subHeading}
                </h6>
              </div>
              <div>{children}</div>
              <a
                href={links}
                className="py-2 text-center bg-blue-900 cursor-pointer btn btn-outline"
                target="_blank"
                title={links}
              >
                {linkName}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
