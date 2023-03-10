import { useEffect, useState } from "react";
import axios from "axios";
import AccountNav from "../components/AccountNav";
import {format} from "date-fns"

const BookingssPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("/bookings").then((response) => {
      const data = response.data;
      setBookings(data);
    });
  }, []);

  console.log(bookings);

  return (
    <div>
      <AccountNav />
      <div>
        <div>
          {bookings.length > 0 &&
            bookings.map((booking) => (
              <div className="container mx-auto flex gap-4 my-4 bg-gray-200 rounded-md overflow-hidden" key={bookings._id}>
                <div className="w-64 shrink-0">
                  <img src={`http://localhost:5000/uploads/${booking.place.photos[0]}`} alt="" className="aspect-square" />
                </div>
                <div className="flex flex-col space-y-2">
                  <h1 className="text-md font-medium">{booking.place.title}</h1>
                  <p>{booking.place.description.split(" ").slice(0, 60).join(" ")}</p>
                  <p>{format(new Date(booking.checkIn), "dd-mm-yyy")} &bull; {format(new Date (booking.checkIn), "dd-mm-yyy")}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookingssPage;
