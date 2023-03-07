import React from "react";

const BookingWidget = ({price, checkIn, setCheckIn, checkOut, setCheckOut, maxGuests, setMaxGuests}) => {
  return (
    <div className="col-span-1 sticky top-3 bg-white shadow-lg overflow-hidden border rounded-md p-4">
      <span className="block text-xl text-center font-medium mb-1">
        Price {price}/per night
      </span>
      <div className="flex flex-col my-2  border border-gray-500 overflow-hidden rounded-md">
        <div className="flex items-center justify-center border ">
          <span className="flex items-center justify-center text-sm border border-r-gray-500">
            <div>
              Check in: <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} name="" id="" />
            </div>
          </span>
          <span className="flex items-center justify-center text-sm ">
            <div>
              Check out: <input type="date" value={checkOut} name="" id="" onChange={e => setCheckOut(e.target.value)} />
            </div>
          </span>
        </div>
        <div className="border border-t-gray-500">
          <span className="flex gap-4 items-center text-sm">
            Max&nbsp;guests: <input type="text" value={maxGuests} placeholder="max guests" onTouchEndCapture={e=> setMaxGuests(e.target.value)}/>
          </span>
        </div>
      </div>
      <button type="button" className="w-full primary p-4">
        Book this place
      </button>
    </div>
  );
};

export default BookingWidget;
