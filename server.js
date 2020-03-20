const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
//need below to handle body data on post requests
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({ msg: req.body });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Post request made");
  const express = require("express");
  const cors = require("cors");
  const connectDB = require("./config/db");
  const Therm = require("./models/Therm");

  const app = express();

  //Connect database
  connectDB();

  app.use(cors());
  //need below middleware to handle body data on post requests
  app.use(express.json({ extended: false }));

  app.get("/", (req, res) => {
    res.json({ msg: "hi" });
  });

  app.post("/", async (req, res) => {
    //extract temperature and city from the request body which is in json format.e.g {"temperature: 24, "city": "London"}
    const { temperature, city } = req.body;
    try {
      //create a new instance of schema located in /models/Therm.js. we created a model there that takes temperature and city.
      let therm = new Therm({
        temperature: temperature,
        city: city
      });
      //mongoose has a save function which makes a post request to the database.
      await therm.save();

      res.send("Details saved into database");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }

    res.json({ msg: req.body });
  });

  app.listen(4000, () => {
    console.log("listening on 4000");
  });
});

app.listen(4000, () => {
  console.log("listening on 4000");
});
