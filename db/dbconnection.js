import mongoose from 'mongoose';




const connection = function (url){
   return mongoose.connect(url);
}
export default connection;



