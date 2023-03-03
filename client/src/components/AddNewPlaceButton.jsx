import { Link } from "react-router-dom";

const AddNewPlaceButton = () => {
  return (
    <div className="text-center mt-10">
      <Link
        to={"/account/places/new"}
        className="inline-flex justify-center items-center gap-1 bg-primary px-4 py-2 rounded-full font-medium text-white"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
        <p>Add new place</p>
      </Link>
    </div>
  );
};

export default AddNewPlaceButton;
