const express = require("express");
const app = express();
const api = require("./api/router/index");

app.use("/api", api);
app.use(express.json());

app.listen(3000, () => {
  console.log("Port is listening to 3000");
});
