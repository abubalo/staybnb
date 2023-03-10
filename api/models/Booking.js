const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookingSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  checkIn: { type: String, required: true },
  checkOut: { type: String, required: true },
  contact: { type: String, required: true },
  numberOfGuests: { type: String, required: true },
  price: { type: Number, required: true },
  place: { type: mongoose.Schema.Types.ObjectId, ref: "Place", required: true },
  userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
});


const BookingModel = mongoose.model("Booking", BookingSchema);

module.exports = BookingModel;
