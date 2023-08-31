const objeto1 = {
    impuesto1: 12,
    impuesto2: 42,
    impuesto3: 35
};

const soloPropiedades = Object.keys(objeto1);
const soloValores = Object.values(objeto1);
const entradas = Object.entries(objeto1);

console.log(soloPropiedades);
console.log(soloValores);
console.log(entradas);

const impuestosTotales = soloValores
    .reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);

console.log(impuestosTotales)

// 12 + 42 + 35

// 0 + 12 = 12
// 12 + 42 = 54
// 54 + 35 = 89

// let acumulador =  0

// for