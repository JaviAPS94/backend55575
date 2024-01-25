import { Router } from 'express';

const router = Router();

const users = [];

//La Arquitectura por capas no esta correctamente aplicada A04
router.post('/register',(req,res)=> {
    //validamos los campos del usuario, ej: que sea obligatorio el nombre, apellido, correo, password A04
    //Va a recibir un password
    const user = req.body;
    console.log(user);
    if(users.length===0) user.id = 1;
    else user.id = users[users.length-1].id+1;
    //Antes de guardar el usuario debemos hashear la contraseña, nunca almacenar en texto plano. A07
    users.push(user);
    res.send({status:"success",payload:user})
})

export default router;