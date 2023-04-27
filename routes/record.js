const { Router } = require("express");
const router = Router();
const recordController = require("../controllers/record.js");

router
  .route("/")
  .get(recordController.getAllRecords)
  .post(recordController.postRecord);

module.exports = router;
