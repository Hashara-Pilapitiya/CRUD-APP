import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB successfully!");
        app.listen(PORT, () => {
            console.log(`Server is running on port : ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB : ", error.message)
    });