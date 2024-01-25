import { Router } from "express";

//La arquitectura por capas no esta correctamente aplicada A04
const router = Router();

router.get('/',(req,res)=>{
    res.render('register');
})

router.get('/login',(req,res)=>{
    res.render('login');
})
export default router;