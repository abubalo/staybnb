const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, reruired: true },
  address: { type: String, reruired: true },
  photos: [{ type: String, reruired: true }],
  description: { type: String, reruired: true },
  perks: [{ type: String, reruired: true }],
  extraInfo: { type: String, reruired: true },
  chekIn: { type: String, reruired: true },
  checkOut: { type: String, reruired: true },
  maxGuests: { type: String, reruired: true },
});

const PlaceModel = mongoose.model("place", placeSchema);

module.exports = PlaceModel;
