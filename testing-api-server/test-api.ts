import express, { application } from "express";
// const express = require("express");
import path from "path";

const app: application = express();

let dir = __dirname;

// send back kitten images
app.get("/api/images/", (request, response) => {
  return response.json({
    images: [
      { id: 1, src: "images/kitten1.jpg", name: "Kitten 1, Ralph" },
      { id: 2, src: "images/kitten2.jpg", name: "Kitten 2, Stephen" },
      { id: 3, src: "images/kitten3.jpg", name: "Kitten 3, Benjamin" },
    ],
  });
});

app.get("/api/tables/", (request, response) => {
  return response.json({
    tables: [
      {
        id: 1,
        img: { src: "images/tables/table-1.jpg" },
        name: "simple table",
      },
      { id: 2, img: { src: "images/tables/table-2.jpg" }, name: "Fancy Table" },
      {
        id: 3,
        img: { src: "images/tables/table-3.jpg", name: "Fanciest Table" },
      },
    ],
  });
});

app.use("/images/", express.static(path.join(dir, "images")));

// read static dist stuff ===========
// this lets us skip
app.use("/dist", express.static(path.join(dir, "../dist")));

app.get("/", function (req, res) {
  res.sendFile(path.join(dir, "../index.html"));
});

const server = app.listen(8001, console.log);
