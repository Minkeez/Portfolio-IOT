const express = require("express");
var indexRouter = require("./routes/");
var path = require("path");
const app = express();
app.set("view engine", "hbs");

app.use("/", indexRouter);
app.use("/aboutme", indexRouter);
app.use(express.static(path.join(__dirname, "public")));

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
