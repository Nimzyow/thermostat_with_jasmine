const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Therm = require("./models/Therm");

const app = express();

connectDB();

app.use(cors());
//need below to handle body data on post requests
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({ msg: "hi" });
});

app.post("/", async (req, res) => {
  console.log("i have reached the post request");
  const { temperature, city } = req.body;

  try {
    let therm = new Therm({
      temperature: temperature,
      city: city
    });

    await therm.save();

    res.send("Details saved into database");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }

  res.json({ msg: req.body });
});

app.listen(4000, () => {
  console.log("listening on 4000");
});
