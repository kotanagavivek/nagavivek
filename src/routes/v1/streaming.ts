import express from "express";
import { StreamContent } from "../../controllers/streaming/index";
let router = express.Router();
import { Request, Response } from "express";
const fs = require("fs");

router.get(
  "/video",
  // function (req, res) {
  // Ensure there is a range given for the video
  // const range = req.headers.range;
  // if (!range) {
  //   res.status(400).send("Requires Range header");
  // }
  // console.log(req.headers)
  // const videoPath = "Chris-Do.mp4";
  // const videoSize = fs.statSync("Chris-Do.mp4").size;

  // const CHUNK_SIZE = 10 ** 6; // 1MB
  // const start = Number(range.replace(/\D/g, ""));
  // const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  // console.log(start);
  // console.log(end);
  // console.log(videoSize);
  // // Create headers
  // const contentLength = end - start + 1;
  // const headers = {
  //   "Content-Range": `bytes ${start}-${end}/${videoSize}`,
  //   "Accept-Ranges": "bytes",
  //   "Content-Length": contentLength,
  //   "Content-Type": "video/mp4",
  // };

  // // HTTP Status 206 for Partial Content
  // res.writeHead(206, headers);

  // // create video read stream for this particular chunk
  // const videoStream = fs.createReadStream(videoPath, { start, end });

  // // Stream the video chunk to the client
  // videoStream.pipe(res);

//   function (req, res) {
//     // let videoName = "video_1";
//     let range = req.headers.range;
//     console.log(req.headers);
//     if (range !== null && range !== undefined) {
//       const videoPath =
//         "./public/static/media/videouploads/video_1.mp4";
//       let videoSize = fs.statSync(videoPath).size;
//       const CHUNK_SIZE = 10 ** 6; // 1MB
//       let start = Number(range.replace(/\D/g, ""));
//       let end = Math.min(start + CHUNK_SIZE, videoSize - 1);
//       console.log("-------------------1-----------------");
//       console.log(start);
//       console.log(end);
//       console.log(videoSize);

//       let contentLength = end - start + 1;
//       let headers = {
//         "Content-Range": `bytes ${start}-${end}/${videoSize}`,
//         "Accept-Ranges": "bytes",
//         "Content-Length": contentLength,
//         "Content-Type": "video/mp4",
//       };
//       res.writeHead(200, headers);
//       let videoStream = fs.createReadStream(videoPath, { start, end });
//       videoStream.pipe(res);
//     } else {
//       res.status(400).send("range is missings in headers");
//     }
//   }
);

// router.get(
//   // "/video/:videoname",
//   "/video",
//   // StreamContent,
//   function (req, res) {
//     let videoName = "video_1";
//     let range = req.headers.range;
//     console.log(req.headers);
//     if (range !== null && range !== undefined) {
//       const videoPath =
//         "./public/static/media/videouploads/" + videoName + ".mp4";
//       let videoSize = fs.statSync(videoPath).size;
//       const CHUNK_SIZE = 10 ** 6; // 1MB
//       let start = Number(range.replace(/\D/g, ""));
//       let end = Math.min(start + CHUNK_SIZE, videoSize - 1);
//       console.log("-------------------1-----------------");
//       console.log(start);
//       console.log(end);
//       console.log(videoSize);

//       let contentLength = end - start + 1;
//       let headers = {
//         "Content-Range": `bytes ${start}-${end}/${videoSize}`,
//         "Accept-Ranges": "bytes",
//         "Content-Length": contentLength,
//         "Content-Type": "video/mp4",
//       };
//       res.writeHead(200, headers);
//       let videoStream = fs.createReadStream(videoPath, { start, end });
//       videoStream.pipe(res);
//     } else {
//       res.status(400).send("range is missings in headers");
//     }
//   }
// );
// =========================  end of routes   ========================
module.exports = router;
