const PORT = 5000;

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

const server = app.listen(PORT, () => {
  console.log(`Server started listening on ${PORT}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});
