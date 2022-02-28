const mysql = require("mysql");
const express = require("express");
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "chatbot",
  password: "",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MYSQL running ...");
});

module.exports = db;
