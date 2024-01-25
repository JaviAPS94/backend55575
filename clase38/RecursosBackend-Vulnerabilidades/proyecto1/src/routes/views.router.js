import { Router } from "express";

const router = Router();

//La Arquitectura por capas no esta correctamente aplicada A04
router.get('/',(req,res)=>{
    res.render('register');
})

export default router;