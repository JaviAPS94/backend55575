import Users from "../dao/Mongo/Users.js"
//Depedencia sin uso A06
import { createHash } from "../utils.js";

const userService = new Users();

const getUsers = async(req,res) =>{
    //try catch, catching de errores no esta implentado A05
    const result = await userService.getUsers();
    res.send({status:"success",payload:result})
}

const getUser = async(req,res) =>{
    //try catch, catching de errores no esta implentado A05
    const id = req.params.uid;
    const user = await userService.getUserById(id);
    res.send({status:"success",payload:user})
}

export default {
    getUsers,
    getUser
}