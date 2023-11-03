import { coursesModel } from '../dbManagers/models/courses.model.js';

export default class Courses {
    constructor() {
        console.log('Working courses with DB');
    }

    deleteProduct = async (cid, pid) => {
        const result = await cartModel.updateOne({ _id: cid }, { $pull: { products: { product: { _id:  pid } } } })
        return result;
    }
}