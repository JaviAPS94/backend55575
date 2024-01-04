import CustomError from '../middlewares/errors/CustomError.js';
import EErrors from '../middlewares/errors/enums.js';

const saveUser = async (req, res) => {
    const { first_name, last_name, email } = req.body;
    console.log(first_name, last_name, email)

    if (!first_name || !last_name || !email) {
        throw CustomError.createError({
            name: 'UserError',
            cause: 'Invalid data types, first_name, last_name and email required',
            message: 'Error trying to create user',
            code: EErrors.INVALID_TYPE_ERROR
        })
    }

    res.send({
        status: 'success',
        payload: { first_name, last_name, email }
    });
};

export default saveUser;