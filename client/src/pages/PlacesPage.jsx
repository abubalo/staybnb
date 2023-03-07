import AccountNav from "../components/AccountNav";
import AddNewPlaceButton from "../components/AddNewPlaceButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  useEffect(() => {
    const sortByLastItemFirst = () => {
      const sortedItems = [...places];
      sortedItems.sort((a, b) => b._id.localeCompare(a._id));
      setPlaces(sortedItems);
    };
  
    window.addEventListener("load", sortByLastItemFirst);
  
    return () => {
      window.removeEventListener("load", sortByLastItemFirst());
    };
  }, []);
  

  return (
    <div>
      <AccountNav />
      <AddNewPlaceButton />
      <div className="container mx-auto">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              to={`/account/places/${place._id}`}
              className="flex gap-4 my-6 bg-gray-100 p-2 rounded-md"
              key={place._id}
            >
              <div className="flex-shrink-0 w-48 h-48 rounded-lg overflow-hidden">
                <img
                  src={`http://localhost:5000/uploads/${place.photos[0]}`}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col w-full">
                <h1 className="text-xl font-semibold">{place.title}</h1>
                <p className="text-sm">{`${place.description
                  .split(" ")
                  .slice(0, 40)
                  .join(" ")}.....`}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PlacesPage;
