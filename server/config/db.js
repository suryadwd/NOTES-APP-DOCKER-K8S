const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("mongoDB connected successfully"))
    .catch((err) => console.log("mongodb connection error", err));
};

module.exports = connectDB;
