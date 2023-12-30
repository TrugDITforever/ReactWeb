const database = require("./database");
const getUserProfile = (callback) => {
  const queryText = "SELECT * FROM poststatus";
  database.connection.query(queryText, function (err, rows) {
    if (err) {
      console.log("Error occurred");
      return callback(err, null);
    }
    callback(null, rows);
  });
};
const getUseraccount = (callback) => {
  const query = "SELECT * FROM useraccount";
  database.connection.query(query, function (err, rows) {
    if (err) {
      console.log("Error occurred");
      return callback(err, null);
    }
    callback(null, rows);
  });
};
const insertUserAccount = (nameuser, password, email, callback) => {
  const query =
    "INSERT INTO `useraccount`(`nameuser`, `password`, `email`) VALUES (?,?,?)";
  const values = [nameuser, password, email];
  database.connection.query(query, values, function (err, results) {
    if (err) {
      return callback(err, null);
    }
    callback(null, null);
  });
};
const checkUser = (emailuser, password, callback) => {
  const query = "SELECT * FROM useraccount WHERE email = ? AND password = ?";
  const values = [emailuser, password];
  database.connection.query(query, values, function (err, rows) {
    if (rows.length > 0) {
      callback(null, rows);
    } else {
      callback("User not found", null);
    }
  });
};
const postStatus = (id, nameuser, subjects, decrip, img, callback) => {
  const query =
    "INSERT INTO `poststatus`(`id_user`, `nameuser`, `subject`, `cmtStatus`, `image`)  VALUES (?,?,?,?,?)";
  const values = [id, nameuser, subjects, decrip, img];
  database.connection.query(query, values, function (err) {
    if (err) {
      return callback(err, null);
    }
    callback(null, null);
  });
};
module.exports = {
  getUserProfile,
  getUseraccount,
  insertUserAccount,
  checkUser,
  postStatus,
};
