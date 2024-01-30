import bcrypt from 'bcrypt';
import {fileURLToPath} from 'url';
import path from 'path';

export const createHash = async(password) =>{
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salts);
}

export const passwordValidation = async(user,password) => bcrypt.compare(password,user.password);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); //asdasd/asdasdasd/asdasd/RecursosBackend-Adoptme/src/utils
//asdasd/asdasdasd/asdasd/RecursosBackend-Adoptme
const __mainDirname = path.join(__dirname, '..', '..'); ////asdasd/asdasdasd/asdasd/RecursosBackend-Adoptme

export default __mainDirname;