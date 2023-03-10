import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import InputField from "../components/InputField";
import PhotoUploader from "./PhotoUploader";
import Perks from "./Perks";
import axios from "axios";
import AccountNav from "./AccountNav";

export default function PlacesFormPage() {
  const { id } = useParams();
  

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, onChangePerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckout] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(0);
  const [redirect, setRedirect] = useState(false);

  async function savePlace(e) {
    e.preventDefault();

    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    };

    if (id) {
      // Update
      await axios.put("/place", { id, ...placeData });
      setRedirect(true);
    } else {
      // Create new place
      await axios.post("/place", placeData);
      setRedirect(true);
    }
  }


  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios.get("/places/" + id).then((response) => {
        const { data } = response;
        setTitle(data?.title);
        setAddress(data?.address);
        setDescription(data?.description);
        setAddedPhotos(data?.photos);
        onChangePerks(data?.perks);
        setExtraInfo(data?.extraInfo);
        setCheckIn(data?.checkIn);
        setCheckout(data?.checkOut);
        setMaxGuests(data?.maxGuests);
        setPrice(data?.price);
      });
    }
  }, [id]);

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  
  return (
    <>
      <AccountNav />
      <div className="container mx-auto my-5">
        <form onSubmit={savePlace} className="flex flex-col space-y-4">
          <InputField
            title="Title"
            desc="Add Title of this place"
            value={title}
            setValue={setTitle}
            placeholder="Downtown, Rivers, Nigeria"
          />
          <InputField
            title="Address"
            desc="Add address of this place"
            value={address}
            setValue={setAddress}
            placeholder="Appart from quiteness and tranquility, beautiful senery awaits you at Downtown. This place has wifi, top bacony and fire camp. All you could hope for."
          />

          <InputField
            title="Description"
            desc="Add clear discrition about this place"
            placeholder="Description ..."
            value={description}
            setValue={setDescription}
            textArea={true}
          />

          <PhotoUploader
            addedPhotos={addedPhotos}
            setAddedPhotos={setAddedPhotos}
            photoLink={photoLink}
            setPhotoLink={setPhotoLink}
          />

          <Perks selected={perks} onChange={onChangePerks} />

          <div className="space-y-2">
            <div>
              <h1 className="text-xl font-medium text-slate-700">
                Extra infomartion
              </h1>
              <p className="text-sm text-gray-500">
                house rules, special needs, etc
              </p>
              <textarea
                className="w-full border  h-[150px] resize-none rounded-lg p-2"
                placeholder="Eg. We asked you be respective to neigbours and keep the kempt"
                value={extraInfo}
                onChange={(e) => setExtraInfo(e.target.value)}
              ></textarea>
            </div>

            <div className="">
              <h1 className="text-xl font-medium text-slate-700">
                Check in&out time, max guests
              </h1>
              <p className="text-sm text-gray-500">
                Check in and out time, remember to have time window for cleaning
                the room between guests
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-2 my-2 ">
              <div>
                <h3 className="font-medium text-md text-gray-700">
                  Check in time
                </h3>
                <input
                  type="date"
                  value={checkIn || ""}
                  onChange={(e) => setCheckIn(e.target.value)}
                  placeholder="18"
                />
              </div>
              <div>
                <h3 className="font-medium text-md text-gray-700">
                  Check out time
                </h3>
                <input
                  type="date"
                  value={checkOut || ""}
                  onChange={(e) => setCheckout(e.target.value)}
                  placeholder="22"
                />
              </div>
              <div>
                <h3 className="font-medium text-md text-gray-700">
                  Max number of guests
                </h3>
                <input
                  type="number"
                  placeholder="Eg. 13 guest"
                  value={maxGuests || ""}
                  onChange={(e) => setMaxGuests(e.target.value)}
                />
              </div>
              <div>
                <h3 className="font-medium text-md text-gray-700">Price</h3>
                <input
                  type="number"
                  placeholder="Eg. 13 guest"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <button className="primary font-medium p-4 active:scale-90 transition-all duration-300">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
