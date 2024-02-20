//Factory nos permite crear objetos de manera dinámica dependiendo una variable de ambiente
//lo que nos hace obtimizar los recursos, ya que no creamos objetos de manera innecesaria, unicamente lo que vamos a utilizar
import config from '../config/config.js';

export let Users;
export let Courses;

const persistence = config.persistence; //Variables de ambiente

switch (persistence) {
    case 'MONGO':
        console.log('Trabajando con persistencia en MongoDB');
        const mongoose = await import('mongoose');
        await mongoose.connect(config.mongoUrl);//Variables de ambiente
        const { default: UsersMongo } = await import('./dbManagers/users.manager.js');
        const { default: CoursesMongo } = await import('./dbManagers/courses.manager.js');
        Users = UsersMongo;
        Courses = CoursesMongo;
        break;
    case 'FILE':
        // const { default: UsersFile } = await import('./fileManagers/user.manager.js');
        // Users = UsersFile;
        break;
}