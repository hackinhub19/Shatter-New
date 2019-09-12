const express = require("express");

const mysql = require("mysql");
const cors = require("cors");

const PORT = process.env.PORT || 4000;
var bodyParser = require("body-parser");
const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2611",
  database: "supplychain"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
