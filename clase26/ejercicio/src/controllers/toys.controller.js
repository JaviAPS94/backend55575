import { saveToy as saveToyService, getToys as getToysService } from '../services/toys.service.js'

const getToys = async (req, res) => {
    try {
        //Voy a obtener el listado de juguetes
        const toys = await getToysService();
        res.send({ payload: toys });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const saveToy = async (req, res) => {
    try {
        const toy = req.body;
        await saveToyService(toy);
        res.send({ payload: toy });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

export {
    getToys,
    saveToy
}