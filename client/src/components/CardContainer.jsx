import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CardContainer() {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState({favorite: false});

  useEffect(() => {
    axios.get("/places").then((response) => {
      setData(response.data);
      // set initial favorite status for all items to false
      const initialFavorites = {};
      response.data.forEach((item) => {
        initialFavorites[item._id] = false;
      });
      setFavorites(initialFavorites);
    });
  }, []);

  const handleFavoriteClick = (e, itemId) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [favorites]: !prevFavorites[itemId]
    }));
  };


  return (
    <>
      {data.length > 0 &&
        data.map((item) => (
          <Link
            to={`/rooms/${item._id}`}
            key={item._id}
            target="_blank"
            className="relative"
          >
            <img
              src={`http://localhost:5000/uploads/${item.photos[0]}`}
              alt=""
              className="object-cover aspect-square rounded-md"
            />
            <div className="mt-2">
            <p className="text-md font-medium">{item.address}</p>
            <p className="text-sm  text-gray-700">{item.checkOut}</p>
            <small className="font-normal">${item.price} per night</small>
            </div>

            <div
              className="absolute top-3 right-3 text-white cursor-pointer active:scale-97 transition-all duration=300 bg-black opacity-30 hover:opacity-[0.5] p-1 rounded-md"
              onClick={(e) =>handleFavoriteClick(e, item._id)}
            >
              {favorites ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              ) : (
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              )}
            </div>
          </Link>
        ))}
    </>
  );
}
