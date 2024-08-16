const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");

const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
