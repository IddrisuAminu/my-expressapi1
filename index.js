const express = require("express");
const results = require("./results");
// const employees = require("./employees");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
// rout
app.get("/", (req, res) => {
  res.send(" <h1>well come to Aminu Express App </h1>");
});

app.get("/results", (req, res) => {
  res.json(results);
});

// app.get("/employees", (req, res) => {
//   res.json(employees);
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
