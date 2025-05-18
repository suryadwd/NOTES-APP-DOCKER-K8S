const mongoose = require('mongoose');

const schemaModel = new mongoose.Schema({
  content:{
    type: String,
    required: true
  }
},{timestamps : true});

const Data = new mongoose.model("Data", schemaModel)
module.exports = Data;