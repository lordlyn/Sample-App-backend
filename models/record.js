const db = require("../util/database.js");

module.exports = class Record {
  constructor(id, firstName, lastName, address, notes) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.notes = notes;
  }

  static fetchAll() {
    return db.select().table("records");
  }

  static post(record) {
    return db("records").insert(record);
  }
};
