'use strict'
const errorHandlerMiddleWare = (err , req , res  , next)=>{
    return res.status(500).json({err:err});
}

export default errorHandlerMiddleWare;