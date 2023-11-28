import Router from './router.js';
import Courses from '../dao/dbManagers/courses.manager.js';
import { accessRolesEnum, passportStrategiesEnum } from '../config/enums.js';

export default class CoursesRouter extends Router {
    constructor() {
        super();
        this.coursesManager = new Courses();
    }

    init() {
        this.get('/', [accessRolesEnum.ADMIN], passportStrategiesEnum.JWT, this.getAll)
        this.post('/', [accessRolesEnum.ADMIN], passportStrategiesEnum.JWT, this.save)
    }

    async getAll(req, res) {
        try {
            const courses = await this.coursesManager.getAll();
            res.sendSuccess(courses);
        } catch (error) {
            res.sendServerError(error.message);
        }
    }

    async save(req, res) {
        try {
            const { title, description, teacher } = req.body;
    
            if(!title || !description || !teacher) {
                return res.sendClientError('incomplete values');
            }
    
            const result = await this.coursesManager.save({
                title,
                description,
                teacher
            });
    
            res.sendSuccessNewResourse(result);
        } catch (error) {
            res.sendServerError(error.message);
        }
    }
}