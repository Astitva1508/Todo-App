const {CustomAPIError} = require('../errors')
const {StatusCodes} = require('http-status-codes')

const customErrorHAndler = async(err,req,res,next)=>{
    const customErrorObject={
        statusCode:err.statusCode||StatusCodes.INTERNAL_SERVER_ERROR,
        msg:err.message||'Something went wrong , Please try again'
    }

    if (err.code && err.code===11000){
        customErrorObject.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`
        customErrorObject.statusCode = StatusCodes.BAD_REQUEST
    }

    if (err.name==='ValidationError'){
        customErrorObject.msg = Object.values(err.errors)
        .map((item) => item.message)
        .join(',')
    customErrorObject.statusCode = 400
    }

    if (err.name === 'CastError') {
        customErrorObject.msg = `No item found with id : ${err.value}`
        customErrorObject.statusCode = 404
  }

    console.log(err.stack||err)

    res.status(customErrorObject.statusCode).json({success:false,message:customErrorObject.msg,name:err.name})
}

module.exports=customErrorHAndler