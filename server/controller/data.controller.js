const Data = require('../model/data.model.js');

const check = async (req, res) => {
  res.status(200).json({ message: "To send data use /send, to get data use /receive" })
}

const sending = async (req, res) => {
  try {
    const { content } = req.body
    if (!content) return res.status(400).json({ message: "Please provide content" })
      
    const newData = new Data({content})
    await newData.save()
    return res.status(201).json({success:true,message:"data saved",data: content })
  } catch (error) {
    console.log("error in the data sending router", error)
    res.status(500).json({success:false, message: "Internal server error" })
  }
}

const receiving = async (req, res) => {
  try {
    const data = await Data.find().sort({createdAt: -1})
    if (!data) return res.status(404).json({ success:false, message: "No data yet" })
    return res.status(200).json({success:true,message:"data received",data })
  } catch (error) {
    console.log("error in the data getting router", error)
    res.status(500).json({success:false, message: "Internal server error" })
  }

}


module.exports = {sending, receiving, check}