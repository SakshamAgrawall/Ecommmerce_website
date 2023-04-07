const ErrorHandler = require("../utils/errorhandler");


module.exports = (err,res,req,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "internal sever error";

    res.status(err.statusCode).json({
        success:false;
        error: err,
    })
}