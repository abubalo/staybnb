import axios from "axios";
import React from "react";

const PhotoUploader = ({
  addedPhotos,
  setAddedPhotos,
  photoLink,
  setPhotoLink,
}) => {
  async function addImageByLink(e) {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhotos((prev) => {
      return [filename, ...prev];
    });

    setPhotoLink("");
  }

  function uploadPhoto(e) {
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        setAddedPhotos((prev) => {
          return [...prev, ...filenames];
        });
      });
  }

  
  return (
    <div className="">
      <h1 className="text-xl font-medium text-slate-800">Photos</h1>
      <p className="text-sm text-slate-500">
        Add beautiful photos of this place
      </p>
      <div className="flex justify-between gap-3">
        <input
          type="text"
          placeholder={
            "https://images.staybnb.com/photo-1677531729248-86225f5c1fb63ger43453"
          }
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
        />
        <button
          type="submit"
          className=" font-smibold font-medium bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 active:scale-1 transition-all duration-300"
          onClick={addImageByLink}
        >
          Add&nbsp;photos
        </button>
      </div>
      <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-5 my-4">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link, index) => (
            <div className="rounded-md overflow-hidden " key={index}>
              <img src={"http://localhost:5000/uploads/" + link} alt="" className="w-full h-[12rem] object-cover"/>
            </div>
          ))}
        <label className="h-[12rem] flex justify-center items-center text-2xl font-semibold bg-transparent text-slate-500 border-2 border-slate-200 cursor-pointer rounded-lg hover:bg-gray-100 transition-all duration-200 ease-linear">
          <input
            type="file"
            name=""
            id=""
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
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
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          Upload
        </label>
      </div>
    </div>
  );
};

export default PhotoUploader;
