import { useContext, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useEffect } from "react";

const BookingWidget = ({ placeId, price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [redirect, setRedirect] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const {user} = useContext(UserContext);

  let numberOfNights = 0;
  if (checkOut && checkIn) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

useEffect(()=>{
  if(user){
    setFirstName(user.firstName)
    setLastName(user.lastName)
  }
},[user])


  async function handleBooking(e) {
    e.preventDefault();
    try {

      const response = await axios.post("/bookings", {
        firstName,
        lastName,
        checkIn,
        checkOut,
        contact,
        numberOfGuests,
        price: price * numberOfGuests,
        place:placeId,
      });

      const bookingId = response.data._id;
      setRedirect(`/account/booking/${bookingId}`);
    } catch (err) {
      console.log(err);
    }
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const formattedPrice = formatter.format(price);

  

  console.log(
    firstName,
    lastName,
    checkIn,
    checkOut,
    contact,
    numberOfGuests,
    price * numberOfGuests,
    placeId,
  );

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <form
      className="col-span-1 h-max sticky top-3 space-y-3 bg-white shadow-lg overflow-hidden border border-slate-300 rounded-md p-4"
      onSubmit={handleBooking}
    >
      <span className="block text-xl text-center font-medium mb-1">
        Price: {price}/per night
      </span>
      <div className="flex flex-col my-2  border border-gray-500 overflow-hidden rounded-md">
        <div className="flex items-center justify-center border ">
          <span className="flex items-center justify-center text-sm p-2 border border-r-gray-500 cursor-pointer">
            <div>
              <label className="text-sm font-normal">Check in: </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                name=""
                id=""
              />
            </div>
          </span>
          <span className="flex items-center justify-center text-sm p-2">
            <div className="cursor-pointer">
              <label className="text-sm font-normal">Check out: </label>
              <input
                type="date"
                value={checkOut}
                name=""
                id=""
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </span>
        </div>
        <div className="border border-t-gray-500 p-2 ">
          <span className="text-sm">
            <label className="text-sm font-normal mb-2">Number of Guests</label>
            <input
              type="number"
              value={numberOfGuests}
              placeholder="max guests"
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
          </span>
        </div>
        {numberOfNights > 0 && (
          <div>
            <div>
              <label className="text-sm font-normal mb-2">First Name: </label>
              <input
                type="text"
                value={firstName}
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-normal mb-2">Last Name: </label>
              <input
                type="text"
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-normal mb-2">
                Contact number:{" "}
              </label>
              <input
                type="tel"
                value={contact}
                placeholder="Contact number"
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white p-4 font-normal rounded-md hover:bg-primaryLight active:scale-95 transition-all duration-200"
      >
        Reserve
        {numberOfNights > 0 && (
          <span> ${numberOfNights * parseInt(price)}</span>
        )}
      </button>
      <p className="text-sm text-center">You won't be charged yet</p>
    </form>
  );
};

export default BookingWidget;
