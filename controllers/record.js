const Record = require("../models/record.js");

const getAllRecords = async (req, res, next) => {
  try {
    const allRecords = await Record.fetchAll();
    const results = JSON.parse(JSON.stringify(allRecords));
    res.status(200).json(results);
  } catch (err) {
    console.log(err);
  }
};

const postRecord = async (req, res, next) => {
  try {
    let record = req.body;
    const postResponse = await Record.post(record);
    res.status(201).json(postResponse);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllRecords,
  postRecord,
};
