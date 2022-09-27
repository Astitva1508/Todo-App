const mongoose = require("mongoose")

const connectDB =async(connectURL)=>mongoose.connect(connectURL)


module.exports = connectDB