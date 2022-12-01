import express from "express";
import { Request, Response, NextFunction } from "express";
import { config } from "./config/config";
import * as http from "http";
import path from "path";
require("dotenv").config();
const app: any = express();
const server: any = http.createServer(app);
const port: any = config.port;

app.set("port", port);

// Express Validator
app.use(express.json());

// development only
if ("development" === app.get("env")) {
  console.log("Running in Development Environment. " + config.port);
}

// Running in production mode
if ("production" === app.get("env")) {
  console.log("Running in Production Environment. " + config.port);
}

//server static files
app.use(express.static("public"));

//allow requests from any host
app.use(function (req: any, res: any, next: any): any {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Authorization, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST,PUT, DELETE");
  next();
});
const fs = require("fs");
app.use("/v1/stream", require("./routes/v1/streaming"));
// app.use("/v1/ftpstream", require("./routes/v1/ftpstream"));
// app.use("/v1/awsupload", require("./routes/v1/awsupload"));

app.use(express.static(path.join(__dirname, "../public")));
app.get("*", (req: any, res: any) => {
  res.sendFile(path.join(__dirname + "/../public"));
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/video", function (req, res) {
  // Ensure there is a range given for the video
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }
  const videoPath = "./public/static/media/videouploads/video_1.mp4";
  const videoSize = fs.statSync(videoPath).size;

  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  // Create headers
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  // HTTP Status 206 for Partial Content
  res.writeHead(206, headers);

  // create video read stream for this particular chunk
  const videoStream = fs.createReadStream(videoPath, { start, end });

  // Stream the video chunk to the client
  videoStream.pipe(res);
});

//Inorder to get the medias in the browser
//Serves all the request which includes /media in the url from media folder
// app.use('/image', express.static(path.join(__dirname, `.${process.env.IMAGESTORAGE_PATH}`)));
// app.use('/video', express.static(path.join(__dirname, `.${process.env.VIDEOSTORAGE_PATH}`)));
// app.use('/file', express.static(path.join(__dirname, `.${process.env.FILESTORAGE_PATH}`)));
// app.use('/audio', express.static(path.join(__dirname, `.${process.env.AUDIOSTORAGE_PATH}`)));
// app.use('/productimage', express.static(path.join(__dirname, `.${process.env.PRODUCTSTORAGE_PATH}`)));
// app.use('/3dfileuploads', express.static(path.join(__dirname, `.${process.env.THREED_FILEUPLOADS_PATH}`)));

// START THE SERVER
server.listen(port, () => {
  console.log(config.serviceName + " is running on port " + port);
});
process.on("SIGINT", function (): any {
  process.exit(0);
});

process.on("SIGTERM", function (): any {
  process.exit(0);
});

module.exports = app;
