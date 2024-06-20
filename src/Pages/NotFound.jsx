import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-center w-full h-[70vh]">
        <div className="flex flex-col items-center justify-center gap-1">
          <h1 className="text-[12rem] font-extrabold">404</h1>
          <button
            onClick={() => navigate(-1)}
            className="px-12 py-2 text-black transition-colors delay-300 bg-red-100 rounded-md shadow-2xl "
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
