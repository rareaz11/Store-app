const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "webshop",
});

app.get("/", (request, result) => {
  return result.json("From backend side");
});

app.get("/user", (request, result) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, data) => {
    if (err) return result.json(err);
    return result.json(data);
  });
});

app.get("/all", (request, result) => {
  const sql = "SELECT*FROM artikl";
  db.query(sql, (err, data) => {
    if (err) return result.json(err);
    return result.json(data);
  });
});

app.listen(8081, () => {
  console.log({ name: "listening" });
});
