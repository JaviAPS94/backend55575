import { fakerES as faker } from '@faker-js/faker';

const generateUsers = () => {
    //Vamos a generar los productos de manera randómica
    const numberOfProducts = faker.number.int({ min: 1, max: 5 });

    let products = [];

    for(let i=0; i < numberOfProducts; i++) {
        products.push(generateProduct());
    }

    return {
        name: faker.person.firstName(),
        lastname: faker.person.lastName(),
        sex: faker.person.sex(),
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        id: faker.database.mongodbObjectId(),
        jobTitle: faker.person.jobTitle(),
        premium: faker.datatype.boolean(),
        role: faker.helpers.arrayElement(['cliente', 'vendedor']), //cliente, vendedor
        products
    }
}

const generateProduct = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        stock: faker.number.int(1),
        id: faker.database.mongodbObjectId(),
        image: faker.image.url(),
        code: faker.string.alphanumeric(10),
        description: faker.commerce.productDescription()
    }
}

export {
    generateUsers
}