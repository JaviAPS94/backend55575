import moment from "moment";

const hoy = moment();
const fechaNacimiento = moment('1998-11-05', 'YYYY-MM-DD');

const diferencia = hoy.diff(fechaNacimiento, 'years');

console.log(diferencia);