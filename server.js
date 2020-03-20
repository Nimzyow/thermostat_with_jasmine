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
});

app.listen(4000, () => {
  console.log("listening on 4000");
});
