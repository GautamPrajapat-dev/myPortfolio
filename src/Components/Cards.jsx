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
      <div className="w-96">
        <div className="mx-auto">
          <div
            className={`flex flex-col bg-white/10  text-white backdrop-blur-md overflow-hidden rounded-md ${classMain}`}
          >
            <div className="overflow-hidden h-[12rem] rounded-md  bg-cover img">
              <img className="bg-center" loading="lazy" src={imgs} alt={imgs} />
            </div>
            <div className="flex flex-col gap-3 p-4 ">
              <div>
                <h1 className="text-2xl font-bold ">{heading}</h1>
                <h6 className="text-sm font-light text-slate-300">
                  {subHeading}
                </h6>
              </div>
              <div>{children}</div>
              <a
                href={links}
                className="py-2 text-center bg-purple-600 rounded-md cursor-pointer btn btn-outline"
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
