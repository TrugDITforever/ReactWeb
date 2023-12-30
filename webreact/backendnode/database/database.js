const { query } = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "datareact", // Thêm tên cơ sở dữ liệu của bạn ở đây
});
connection.connect(function (err) {
  if (err) {
    console.log("Error occurred while connecting to the database");
  }
});

module.exports = {
  connection,
};
