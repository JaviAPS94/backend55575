import { usersService } from "../services/index.js"

const getAllUsers = async(req,res)=>{
    /* #swagger.tags = ['Users']*/
    const users = await usersService.getAll();
    /* #swagger.responses[200] = {
        schema: { "$ref": "#/definitions/User" }, description: "Get all users ok"
    }*/
    res.send({status:"success",payload:users})
}

const getUser = async(req,res)=> {
    /* #swagger.tags = ['Users']*/
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error",error:"User not found"})
    res.send({status:"success",payload:user})
}

const updateUser =async(req,res)=>{
    /* #swagger.tags = ['Users']*/
    const updateBody = req.body;
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error", error:"User not found"})
    const result = await usersService.update(userId,updateBody);
    res.send({status:"success",message:"User updated"})
}

const deleteUser = async(req,res) =>{
    /* #swagger.tags = ['Users']*/
    const userId = req.params.uid;
    const result = await usersService.getUserById(userId);
    res.send({status:"success",message:"User deleted"})
}

export default {
    deleteUser,
    getAllUsers,
    getUser,
    updateUser
}