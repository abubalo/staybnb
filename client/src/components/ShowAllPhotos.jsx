import React from "react";

const ShowAllPhotos = ({ roomData, setShowAllPhotos }) => {
  return (
    <div className="fixed inset-0 bg-white min-w-full min-h-screen overflow-scroll">
      <div className="container mx-auto">
       
        <button
          type="button"
          className="fixed top-3 flex items-center mb-4 p-4 space-x-1 text-white bg-gray-500 rounded-md"
          onClick={() => setShowAllPhotos(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
          <p>Go back</p>
        </button>
        <h1 className="w-full text-xl flex flex-items-end font-medium p-2">Photos of {roomData.title}</h1>
        <div className="grid gap-3 p-4 h-min overflow-scroll">
          {roomData.photos.map((photo) => (
            <div key={roomData._id}>
              <img
                src={`http://localhost:5000/uploads/${photo}`}
                alt=""
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowAllPhotos;
