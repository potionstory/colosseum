import * as functions from "firebase-functions";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Rank Colosseum!!!");
});

exports.api = functions.region("asia-northeast3").https.onRequest(app);
