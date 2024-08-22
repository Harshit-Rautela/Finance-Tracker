import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import SignUpRouter from "./routes/SignUpRoute.js";
import LogInRouter from "./routes/LogInRoute.js";
const app = express();
dotenv.config();

const PORT = 5555;

const MongoDBURL = process.env.MONGODBURL;
app.use(cors());
app.use(express.json());

app.use("/user", SignUpRouter);
app.use("/user", LogInRouter);

app.get("/", (req, res) => {
  console.log("The request is", req);
  res.status(200).send("Welcome to Finance Tracker.");
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT:${PORT}`);
});

mongoose
  .connect(MongoDBURL)
  .then(console.log("Conncted to mongoDB database"))
  .catch((err) => {
    console.error("Error connecting to MongoDB database", err);
  });
