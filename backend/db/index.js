const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  contact: {
    type: { name: String, number: Number },
  },
});

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contacts: {
    type: [contactSchema],
  },
});

const supermanModel = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

// the user model
export const User = mongoose.model("User", userSchema);
// the superman model
export const Superman = mongoose.model("Superman", supermanModel);
