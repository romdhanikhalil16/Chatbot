const express = require("express");
const app = express();
const db = require("./connection");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
  let sql = "SELECT * FROM users";
  db.query(sql, (err, rows) => {
    if (err) throw err;
    res.status(200).json({
      message: "success",
      value: rows,
    });
  });
});

app.post("/register", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "INSERT INTO users(name,age,email,password)VALUES(?,?,?,?);",
    [name, age, email, password],
    (err, data) => {
      if (err) {
        res.status(404).send({
          message: "failed",
          status: 404,
          error: err,
        });
      } else {
        res.status(200).send({
          message: "success",
          status: 200,
          data: data,
        });
      }
    }
  );
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE name = ? AND password = ?",
    [name, password],
    (err, data) => {
      if (err) {
        res.status(404).send({
          err: err,
        });
      }
      if (data.length > 0) {
        res.status(200).send({
          message: "success",
          status: 200,
          data: data,
        });
      } else {
        res.status(404).send({
          message: "user unfounded",
        });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("hello from server");
});
