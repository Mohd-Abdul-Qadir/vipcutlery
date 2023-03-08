const express = require("express");
const routes = require("./routes/route");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 8080;

app.use(cors());
require("./config/db");
app.use("/api", routes);

app.use(express.static("build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
