import Router from './router.js';
import Students from '../dao/dbManagers/students.manager.js';
import Courses from '../dao/dbManagers/courses.manager.js';
import { accessRolesEnum, passportStrategiesEnum } from '../config/enums.js';

export default class ViewsRouter extends Router {
    constructor() {
        super();
        this.studentsManager = new Students();
        this.coursesManager = new Courses();
    }

    init() {
        this.get('/students-view', [accessRolesEnum.PUBLIC], passportStrategiesEnum.NOTHING, this.studentsView);
        this.get('/courses-view', [accessRolesEnum.PUBLIC], passportStrategiesEnum.NOTHING, this.coursesView);
    }

    async studentsView(req, res) {
        try {
            const students = await this.studentsManager.getAll();
            res.render('students', { students });
        } catch (error) {
            res.sendServerError(error.message);
        }
    }

    async coursesView(req, res) {
        try {
            const courses = await this.coursesManager.getAll();
            res.render('courses', { courses });
        } catch (error) {
            res.sendServerError(error.message);
        }
    }
}