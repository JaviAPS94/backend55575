// ['manzanas','peras','jugos']

const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	}, //13
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
];

//hashmaps

let arregloResultante = [];
let total = 0;

objetos.forEach(objeto => {
    const keys = Object.keys(objeto);
    const values = Object.values(objeto);

    total += values
        .reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);

    keys.forEach(key => {
        if(!arregloResultante.includes(key)) arregloResultante.push(key);
    })
})

console.log(arregloResultante);
console.log(total);


