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

  return (
    <div className="">
      <AccountNav />
      <AddNewPlaceButton />
      <div className="container w-[80%] mx-auto ">
        {places.length > 0 &&
          places.map((place) => (
            <Link to={"/account/places/" + place._id} key={place._id}>
              <div className="flex flex-row-reverse gap-2 justify-between my-6 bg-gray-200 p-2 rounded-md">
                <div className="skrink-0 grow-0">
                  <h1 className="text-xl font-semibold">{place.title}</h1>
                  <p className="text-sm">{place.description}</p>
                </div>
                <div className="flex w-[30rem]  rounded-lg overflow-hidden">
                  <img
                    src={`http://localhost:5000/uploads/${place.photos[0]}`}
                    alt=""
                    className="object-cover aspect-square"
                  />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PlacesPage;
