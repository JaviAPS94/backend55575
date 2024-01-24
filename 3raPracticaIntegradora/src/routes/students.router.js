import Router from './router.js';
import Students from '../dao/dbManagers/students.manager.js';
import { accessRolesEnum, passportStrategiesEnum } from '../config/enums.js';

export default class StudentsRouter extends Router {
    constructor() {
        super();
        this.studentsManager = new Students();
    }

    init() {
        this.get('/', [accessRolesEnum.USER], passportStrategiesEnum.JWT, this.getAll)
        this.post('/', [accessRolesEnum.ADMIN], passportStrategiesEnum.JWT, this.save)
    }

    async getAll(req, res) {
        try {
            const students = await this.studentsManager.getAll();
            res.sendSuccess(students);
        } catch (error) {
            res.sendServerError(error.message);
        }
    }

    async save(req, res) {
        try {
            const { first_name: firstName, last_name: lastName, dni, email, birth_date: birthDate, gender } = req.body;
    
            if(!firstName || !lastName || !email) {
                return res.sendClientError('incomplete values');
            }
    
            const result = await this.studentsManager.save({
                first_name: firstName,
                last_name: lastName,
                dni,
                email,
                birth_date: birthDate,
                gender
            });
    
            res.sendSuccessNewResourse(result);
        } catch (error) {
            res.sendServerError(error.message);
        }
    }
}