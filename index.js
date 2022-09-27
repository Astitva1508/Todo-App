require('express-async-errors')
require('dotenv').config()

const express = require('express')
const app = express();
const cors = require('cors')

const tasksRoute = require('./routes/tasks.js')


const errorHandlerMiddleware=require('./middleware/error-handler')
const notFoundMiddleware=require('./middleware/not-found.js')

app.use(cors())

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('Namaskaaram')
})


app.use('/api/v1/tasks',tasksRoute);

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)


const connectDB = require('./db/connect')
const PORT = process.env.PORT ||3000

const connectServer=async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        const server = app.listen(PORT,()=>console.log(`Server Listening on PORT ${PORT}`));
        console.log('Connected to Database')
    } catch (error) {
        console.log(error)
        process.exit(0)
    }
}

const cleanup = require('./utlis/exit-handler').Cleanup(myCleanup);

function myCleanup() {
  console.log('App specific cleanup code...');
};

connectServer()