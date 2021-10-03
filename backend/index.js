// all imports
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

// express app
const app = express();

// middlewares
app.use(express.json());

mongooseConn().catch((err) => console.log(err));

// mongoose connection
async function mongooseConn() {
  await mongoose
    .connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err));
}

// login -> aadhar + contacts <users>
app.post("/login/user", (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});

// login -> aadhar <superman>
app.post("/login/socialHero", (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});

// dashboard <user>
app.get("/", (req, res) => {});

// dashboard <superman>
app.get("/", (req, res) => {});

//
app.get("/", (req, res) => {});

//
app.get("/", (req, res) => {});

// app listening at PORT 8000
app.listen(8000, () => {
  console.log("listening at port: ", 8000);
});
