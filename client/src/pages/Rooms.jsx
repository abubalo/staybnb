import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../components/BookingWidget";
import ShowAllPhotos from "../components/ShowAllPhotos";
import {
  BsPersonWorkspace,
  BsDoorOpenFill,
  BsCalendar2X,
} from "react-icons/bs";

const Rooms = () => {
  
  const { id } = useParams();
  const [roomData, setRoomData] = useState({});
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  

  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios.get(`/room/${id}`).then((response) => {
        setRoomData(response.data);
      });
    }
  }, [id]);

  if (!roomData) return "";

  if (showAllPhotos) {
    return (
      <ShowAllPhotos roomData={roomData} setShowAllPhotos={setShowAllPhotos} />
    );
  }
  // const toggleFavorite = () => {
  //   axios.put(`/room/${id}`, { favorite: !roomData.favorite }).then((response) => {
  //     setRoomData(response.data);
  //   });
  // };

  return (
    <div>
      {roomData && (
        <div className="w-[80%] mx-auto my-8" key={roomData._id}>
          <div className="grid">
            {roomData.photos?.[0] && (
              <>
                <h1 className="text-xl font-medium">{roomData.title}</h1>
                <div className="flex items-center space-x-2 mb-5">
                  <div className="flex items-center text-sm font-normal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p>4.9 &bull; reviews &bull; superhost</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>

                  <a
                    href={`https://maps.google.com/?q=${roomData.address}`}
                    className="text-sm font-normal underline"
                    target="_blank"
                  >
                    {roomData.address}
                  </a>
                </div>
                <div className="relative grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
                  <div className="col-span-1 ">
                    <img
                      src={`http://localhost:5000/uploads/${roomData.photos[0]}`}
                      alt=""
                      className="w-full object-cover aspect-square h-[25rem]"
                    />
                  </div>
                  <div className="max-w-full grid md:grid-cols-2 lg:grid-cols-2 gap-2 ">
                    <div className="col-span-1 overflow-hidden">
                      <img
                        src={`http://localhost:5000/uploads/${roomData.photos[1]}`}
                        alt=""
                        className="w-full object-cover aspect-square h-[12rem] "
                      />
                    </div>
                    <div className="col-span-1 overflow-hidden">
                      <img
                        src={`http://localhost:5000/uploads/${roomData.photos[2]}`}
                        alt=""
                        className="w-full object-cover aspect-square h-[12rem]"
                      />
                    </div>
                    <div className="col-span-1 overflow-hidden">
                      <img
                        src={`http://localhost:5000/uploads/${roomData.photos[3]}`}
                        alt=""
                        className="w-full object-cover aspect-square h-[12rem]"
                      />
                    </div>
                    <div className="col-span-1 overflow-hidden">
                      <img
                        src={`http://localhost:5000/uploads/${roomData.photos[4]}`}
                        alt=""
                        className="w-full object-cover aspect-square h-[12rem]"
                      />
                    </div>
                    <div
                      className="absolute inline-flex items-center space-x-2 p-2 bg-white bottom-2 right-2 border-2 border-slate-500 cursor-pointer rounded-md"
                      onClick={() => setShowAllPhotos(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm font-normal">Show all Photos</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="md:col-span-2">
              <div className="flex justify-between items-center py-4 border-b">
                <div>
                  <h1 className="text-xl font-semibold ">
                    Entire house hosted by [Jesicca]
                  </h1>
                  <p className="text-sm font-normal">
                    4 guests &bull; 1 bedroom &bull; 1 bed &bull; 1 bathroom{" "}
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary outline rounded-full">
                  <span className=""></span>
                </div>
              </div>

              <div className="py-8 border-b">
                <div className="flex flex-col gap-2 space-y-5 ">
                  <span className="flex gap-2 justify-start items-start">
                    <BsPersonWorkspace />
                    <span className="flex flex-col">
                      <h3 className="text-sm font-normal">
                        Dedicated workspace
                      </h3>
                      <p className="text-sm text-gray-500">
                        A private room with wifi that’s well-suited for working.
                      </p>
                    </span>
                  </span>
                  <span className="flex gap-2 justify-start items-start">
                    <BsDoorOpenFill />
                    <span className="flex flex-col">
                      <h3 className="text-sm font-normal">Self check in</h3>
                      <p className="text-sm text-gray-500">
                        A private room with wifi that’s well-suited for working.
                      </p>
                    </span>
                  </span>
                  <span className="flex gap-2 justify-start items-start">
                    <BsCalendar2X />
                    <span className="flex flex-col">
                      <h3 className="text-sm font-normal">Free cancelation</h3>
                      <p className="text-sm text-gray-500">
                        Free cancellation for 48 hours.
                      </p>
                    </span>
                  </span>
                </div>
              </div>
              <div className="py-4 space-y-3 border-b">
                <h1 className="text-2xl font-bold">
                  <span className="text-primary">stay</span>cover
                </h1>
                <p className="text-sm">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in</p>
                <a href="#" className="underline text-sm font-normal">Learn more</a>
              </div>

              <div className="mt-4">
                <h1 className="text-xl font-medium">Description</h1>
                <p className="text-sm ">{roomData.description}</p>
              </div>
              <div className="w-max p-4 bg-gray-200 mt-4 space-y-1 text-sm font-normal">
                <div>Check in: {roomData.checkIn}</div>
                <div>Check out: {roomData.checkOut}</div>
                <div>Max guests: {roomData.maxGuestd}</div>
              </div>
            </div>

            <BookingWidget price={roomData.price} placeId={roomData._id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;
