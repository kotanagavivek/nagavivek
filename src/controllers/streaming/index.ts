import { Request, Response } from "express";
const fs = require("fs");

export function StreamContent(req: Request | any, res: Response): any {
  try {
    let videoName = "video_1";
    let range = req.headers.range;
    console.log(req.headers)
    if (range !== null && range !== undefined) {
      const videoPath =
        "./public/static/media/videouploads/" + videoName + ".mp4";
      let videoSize = fs.statSync(videoPath).size;
      const CHUNK_SIZE = 10 ** 6; // 1MB
      let start = Number(range.replace(/\D/g, ""));
      let end = Math.min(start + CHUNK_SIZE, videoSize - 1);
      console.log("-------------------1-----------------")
      console.log(start)
      console.log(end)
      console.log(videoSize)

      let contentLength = end - start + 1;
      let headers = {
          "Content-Range": `bytes ${start}-${end}/${videoSize}`,
          "Accept-Ranges": "bytes",
          "Content-Length": contentLength,
          "Content-Type": "video/mp4",
      };  
      res.writeHead(200, headers);
      let videoStream = fs.createReadStream(videoPath, { start, end });
      videoStream.pipe(res);
    } else {
      res.status(400).send("range is missings in headers");
    }
  } catch (err) {
    return res.status(400).send(err);
  }
}
