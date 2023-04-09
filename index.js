const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/userRoute");
require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(cors());


app.use(express.json());
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.use("/user", userRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Not able to connect to MongoDB");
  }
  console.log("Listening to the Port");
});
