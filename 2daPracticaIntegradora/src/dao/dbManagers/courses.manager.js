import { coursesModel } from './models/courses.model.js';

export default class Courses {
    constructor() {
        console.log('Working courses with DB');
    }

    getAll = async () => {
        const courses = await coursesModel.find().lean();
        return courses;
    }

    save = async (course) => {
        const result = await coursesModel.create(course);
        return result;
    }

    update = async (id, course) => {
        const result = await coursesModel.updateOne({ _id: id }, course);
        return result;
    }
}