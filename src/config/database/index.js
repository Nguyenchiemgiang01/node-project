const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/f8_education_dev");
        console.log("Connection successfully!!");
    } catch (e) {
        console.log("Connection failure\n", e);
    }
}

module.exports = { connect };
