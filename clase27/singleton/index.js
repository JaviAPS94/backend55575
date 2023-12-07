import MongoSingleton from "./singleton.js";

const firstInstance = MongoSingleton.getInstance();
const secondInstance = MongoSingleton.getInstance();
const thirdInstance = MongoSingleton.getInstance();


const userInstance = new User('alex');
//todos los usaurios que lleguen
//los mismos datos de Alex, si aplicamos singleton
const userSamuel = new User('')
