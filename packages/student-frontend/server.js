// const path = require("path");
// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// // heroku will provide a port or local
// const port = process.env.PORT || 3002;

// const publicPath = path.join(__dirname, "..", "client/build");

// app.use(express.static(publicPath));
// // app.use("/static", express.static(path.join(__dirname, "client/build")));

// app.get("*", (req, res) => {
//   const index = path.join(__dirname, "build", "index.html");
//   res.sendFile(index);
// });

// app.listen(port, () => {
//   console.log(`Server is up on port ${port}!`);
// });

const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "build");
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log("Server is up!");
});
