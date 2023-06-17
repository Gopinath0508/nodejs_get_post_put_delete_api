const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const uuid = uuidv4;
console.log(uuid);
const userSchema = new mongoose.Schema({
_id:{
  type:String,
  default:uuid
}, 
  name:{
    type: String
  },
  age: {
    type: Number
  },
  active:{
    type:Boolean,
    default:true
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
