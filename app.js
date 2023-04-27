const express = require("express");
const bodyParser = require("body-parser");
const recordRoutes = require("./routes/record.js");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/records", recordRoutes);

app.listen(PORT, () => {
  console.log("Listening to port 3000.");
});
