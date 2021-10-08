// all imports
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const got = require("got");

// express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.post("/sendMessage", async (req, res) => {
  try {
    const { message } = req.body;
    const response = await got
      .post("https://www.fast2sms.com/dev/bulkV2", {
        json: {
          route: "q",
          message,
          language: "english",
          flash: 0,
          numbers: "",
        },
        headers: {
          authorization: process.env.AUTHORIZATION_TOKEN,
        },
      })
      .json();

    res.json(response);
  } catch (err) {
    console.log(err);
  }
});

// app listening at PORT 8000
app.listen(8000, () => {
  console.log("listening at port: ", 8000);
});
