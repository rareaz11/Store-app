const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
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

app.get("/myorders", (req, res) => {
  const sql = "SELECT * FROM orders";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql = "INSERT INTO user(userName,pass,email) VALUES(?,?,?)";
  const values = {
    userName: req.body.userName,
    pass: req.body.pass,
    email: req.body.email,
  };
  db.query(sql, [values.userName, values.pass, values.email], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.post("/createOrder", (req, res) => {
  const sql = "INSERT INTO orders(userId,totalValue) VALUES(?,?)";
  const values = {
    userId: req.body.userId,
    totalValue: req.body.totalPrice,
  };
  db.query(sql, [values.userId, values.totalValue], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log({ name: "listening" });
});
