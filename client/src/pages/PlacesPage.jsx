import AccountNav from "../components/AccountNav";
import AddNewPlaceButton from "../components/AddNewPlaceButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const PlacesPage = () => {
  
  const [Places, setPlaces] = useState([]);
  const DESC_LENGTH = 250;

  const url = "http://localhost:5000/uploads/";

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
        {Places.length > 0 &&
          Places.map(({_id, title, photos, description }) => (
            <Link to={"/account/places/" + _id} key={_id}>
              <div className="flex flex-row-reverse gap-2 justify-between my-6 bg-gray-200 p-4 rounded-md">
                <div className="skrink-1">
                  <h1 className="text-xl font-semibold">{title}</h1>
                  <p className="text-sm">
                    {description.length > DESC_LENGTH
                      ? description.substring(0, DESC_LENGTH) + "..."
                      : description}
                  </p>
                </div>
                <div className="flex w-[30rem]  rounded-lg overflow-hidden">
                  <img src={url + photos[0]} alt="" className="object-cover" />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PlacesPage;
