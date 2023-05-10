// Server for microservice
// Adapted from CS290 Assignment 5 starter code
// Date: November 2022
// Author: Pam Van Londen, Melanie Archer, and Steven Bertolucci 

import 'dotenv/config';
import express from "express";
import asyncHandler from "express-async-handler";
import fetch from "node-fetch";
import cors from "cors";

const PORT = process.env.PORT;
if (PORT == null || PORT == ""){
  PORT=8000;
};

const app = express();
app.use(express.static("public"));

app.use(cors());

const API = "https://api.bigdatacloud.net/data/reverse-geocode-client?city={query}&localityLanguage=en";

app.use("/zipcode", (req, res, next) => {
  next();
});

// call the Random Person API
app.get("/zipcode",
  asyncHandler(async (req, res) => {
    const resp = await fetch(API);
    const data = await resp.json();
    res.send(data);
    console.log(data)
  })
);

// Respond using an error handler middleware function when it doesn't work.
app.use((error, req, res, next) => {
  console.log(`Unhandled error ${error}. URL: ${req.originalUrl}`);
  res.status(500).send({ error: `500 - Server Error.` });
});

// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});