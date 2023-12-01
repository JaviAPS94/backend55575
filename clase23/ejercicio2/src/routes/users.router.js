import Router from './router.js';
import validator from '../utils/validator.js';
import { getByIdSchema, postSchema } from '../schemas/users.schema.js';

export default class UsersRouter extends Router {
    init() {
        this.get('/', ['ADMIN', 'USER_PREMIUM'], (req, res) => {
            res.sendClientError('Error del cliente');
        })
        
        //query, path, body
        this.post('/', ['ADMIN', 'USER_PREMIUM'], validator.body(postSchema), (req, res) => {
            // {
            //     name: "Alex",
            //     last_name: "Pinaida",
            //     email: "ap@gmail.com"
            // }
            res.sendClientError('Error del cliente');
        })

        this.get('/path-param/:id', ['ADMIN', 'USER_PREMIUM'], validator.params(getByIdSchema), (req, res) => {
            // {
            //     name: "Alex",
            //     last_name: "Pinaida",
            //     email: "ap@gmail.com"
            // }
            res.sendClientError('Error del cliente');
        })

        this.put('/validator-mixed/:id', ['ADMIN', 'USER_PREMIUM'], validator.params(getByIdSchema), validator.body(postSchema), (req, res) => {
            // {
            //     name: "Alex",
            //     last_name: "Pinaida",
            //     email: "ap@gmail.com"
            // }
            res.sendClientError('Error del cliente');
        })
    }
}