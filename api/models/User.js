const mongoose = require("mongoose");

const {Schema} = mongoose;

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {type: String, unique: true, required: true},
    password: { type: String, required: true }
})

const userModel = mongoose.model("User", UserSchema)

module.exports = userModel