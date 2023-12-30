const express = require("express");
const dbConnection = require("../database/database");
const {
  getUserProfile,
  getUserAccount,
  insertUser,
  checkUser,
  postStatus,
} = require("../controller/getforstudy");
const router = express.Router();
router.use(express.json());
router.get("/v1/usestatus", getUserProfile);
router.get("/v1/useraccount", getUserAccount);
router.post("/v1/insertUser", insertUser);
router.post("/v1/checkuser", checkUser);
router.post("/v1/postStatus", postStatus);

module.exports = router;
