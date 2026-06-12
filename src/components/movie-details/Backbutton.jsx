import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 mb-8 text-gray-400 hover:text-white transition-all group"
    >
      <IoArrowBack
        size={24}
        className="group-hover:-translate-x-1 transition-transform"
      />
      <span className="font-medium">Back to Movies</span>
    </button>
  );
};

export default BackButton;
