const User = require('../models/userModel');
const addService = async(body)=>{
    const data = await User.create(body)
    return data;
}
const GetdataService = async(id)=>{
    const values = await User.aggregate([
        [ { $match : { _id : id } } ]
    ]);
    return values;
}
const getAllData = async()=>{
    const values = await User.aggregate(
        [{$match: { active: true}}]
);
 return values
}
const Updatedata = async(id,body)=>{
    let user = await User.findById(id);
    if(!user){
        console.log("id not found")
    }
    user = await User.findByIdAndUpdate({_id:id},body);
    return user;
}
const deletedata =async(id,body)=>
{ 
    let user = await User.findById(id);
    if(!user){
        console.log("id not found")
    }
    user = await User.findByIdAndDelete({_id:id,body});
    return user;
}  
const deletedatafalse =async(id,body)=>
{ 
    let user = await User.findById(id);
    if(!user){
        console.log("id not found")
    }
       user = await User.findByIdAndUpdate({_id:id},{active:true});
    return user;
} 
module.exports = {
    addService,
    GetdataService,
    getAllData,
    Updatedata,
    deletedata,
    deletedatafalse
}