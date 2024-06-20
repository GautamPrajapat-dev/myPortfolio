const HeaderText = ({ text }) => {
  return (
    <div>
      <div className="text-4xl mt-[3%]  flex justify-center items-center w-full    uppercase">
        <div className="relative flex justify-center w-full mx-auto text-xl lg:text-3xl">
          <span className="left-0 ">{text}</span>
          <span className="absolute border-b-4 border-green-400 bottom-0 -rotate-[2deg] w-36 "></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderText;
