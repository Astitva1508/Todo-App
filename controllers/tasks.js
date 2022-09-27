const Task = require('../models/Task')
const {StatusCodes}=require('http-status-codes')
const{BadRequestError,NotFoundError} = require('../errors/')

const getAllTasks = async (req, res) => {
  const  tasks = await Task.find({}).sort({_id:1})
  res.status(StatusCodes.OK).json({success:true ,content:{tasks}})
}

const createTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(StatusCodes.CREATED).json({success:true ,content:{task}})
}

const getTask = async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })

  if (!task) throw new NotFoundError(`No task with ID ${taskID}`)

  res.status(StatusCodes.OK).json({success:true ,content:{task}})

}

const deleteTask = async (req, res, next) => {
  const {IDs:_id} = req.body
  const task = await Task.deleteMany({_id})

  res.status(StatusCodes.OK).send()
}

const updateTask = async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) throw new NotFoundError(`No task with ID ${taskID}`)
  task.isChecked=!task.isChecked;
  await task.save()

  res.status(200).json({success:true ,content:{task}})
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}