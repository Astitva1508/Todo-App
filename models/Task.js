const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, 'must provide task'],
    trim: true,
    maxlength: [20, 'task can not be more than 20 characters'],
  },
  isChecked: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Task', TaskSchema)
