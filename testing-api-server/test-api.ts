import * as express from "express";
import * as path from "path";
const app = express();

// send back kitten images
app.get("/api/images/", (request, response) => {
  console.log("welp", request);

  return response.json({
    images: [
      { id: 1, src: "images/kitten1.jpg", name: "Kitten 1, Ralph" },
      { id: 2, src: "images/kitten2.jpg", name: "Kitten 2, Stephen" },
      { id: 3, src: "images/kitten3.jpg", name: "Kitten 3, Benjamin" },
    ],
  });
});

app.use("/images/", express.static(path.join(__dirname, "images")));

// read static dist stuff ===========
// this lets us skip
app.use("/dist", express.static(path.join(__dirname, "../dist")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

const server = app.listen(8000, console.log);