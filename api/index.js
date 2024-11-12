const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Route = require("./routes/Routes.js");

const app = express();
const corsOrigin = {
  origin: ["http://localhost:5173"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOrigin));
app.use(express.json());

app.use("/", Route);
app.listen(3000);

mongoose
  .connect("mongodb://127.0.0.1:27017/Rhyno")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Error in database");
  });
