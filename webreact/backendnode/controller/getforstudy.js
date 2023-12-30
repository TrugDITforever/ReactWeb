const dbConnection = require("../database/functionforUser");
exports.getUserProfile = (req, res) => {
  dbConnection.getUserProfile((err, rows) => {
    if (err) {
      console.error("Error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    // Send the retrieved data as a JSON response
    res.status(200).json({ datastatus: rows, message: "Success" });
  });
};
exports.getUserAccount = (req, res) => {
  dbConnection.getUseraccount((err, rows) => {
    if (err) {
      console.error("Error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    // Send the retrieved data as a JSON response
    res.status(200).json(rows);
  });
};
exports.insertUser = (req, res) => {
  const state = req.body;
  if (!state.username || !state.password || !state.email) {
    return res.status(400).json({ message: "error cant be empty" });
  }
  dbConnection.insertUserAccount(
    state.username,
    state.password,
    state.email,
    (err, result) => {
      if (err) {
        return res.status(200).json({ message: "error" });
      }
      res.status(200).json({
        message: "success",
      });
    }
  );
};
exports.checkUser = (req, res) => {
  const state = req.body;
  dbConnection.checkUser(state.email, state.password, (err, rows) => {
    // if (err) {
    //   return res.status(400).json({ error: "Authentication failed" });
    // }
    if (rows && rows.length > 0) {
      res.status(200).json({
        dataUser: rows,
        message: "success",
      });
    } else {
      res.status(200).json({
        message: "error",
      });
    }
  });
};

exports.postStatus = (req, res) => {
  const data = req.body;
  dbConnection.postStatus(
    data.iduser,
    data.name,
    data.subject,
    data.decrip,
    data.picture,
    (err) => {
      if (err) {
        return res.status(200).json({ message: "error" });
      }
      res.status(200).json({
        message: "success",
      });
    }
  );
};
