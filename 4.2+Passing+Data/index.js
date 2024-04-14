import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const name = req.body;
  const nameLength = name.fName.length + name.lName.length;
  res.locals.count = nameLength;
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
