const express = require("express");
const { connectDB } = require("./config/database");
const personRouter = require("./routers/personrouters");

const app = express();

connectDB();

app.use(express.json());

app.use("/person", personRouter);

app.listen(8080, () => {
  console.log("listening to port 8080");
});
