const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { message: "Mini Message Board!" });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
