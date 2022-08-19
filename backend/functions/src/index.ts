import * as functions from "firebase-functions";
import express from "express";
import router from "./route";

const app = express();

app.use(express.json());
app.use("/", router);

exports.api = functions.region("asia-northeast3").https.onRequest(app);
