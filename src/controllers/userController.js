const userService = require('../services/userService');
const addData  = async (req,res)=>{
    const dataa = await userService.addService(req.body);
    res.send(dataa)
}
const Getdata = async(req,res)=>{
    const data = await userService.GetdataService(req.params.id);
    res.send(data);
}
const getAll = async(req,res)=>{
    const getData = await userService.getAllData();
    res.send(getData)
}
const update = async (req, res) => {
    const updatedata = await userService.Updatedata(req.params.id,req.body);
    res.send(updatedata);
    res.status(200);
};
const deleted = async (req,res) => {
const deldata = await userService.deletedata(req.params.id,req.body);
res.send(deldata);
};
const deletedfalse = async (req,res) => {
    const deldata = await userService.deletedatafalse(req.params.id,req.body);
    res.send(deldata);
};
module.exports = {
    addData,
    Getdata,
    getAll,
    update,
    deleted,
    deletedfalse
}