class ProductManager {
    constructor() {
        this.products = [];
    }

    getEventos = () => {
        return this.eventos;
    }

    addProduct = (
        title,
        description, price, thumbnail, code, stock ) => {
            // Validar que los campos sean obligatorios
            // if (!title || !description .....)
            // [
            //     {
            //         title: 'Pizza',
            //         description: 'Pizza de manzana',
            //         price: 200,
            //         thumbnail: 'http://imagen.jpg',
            //         code: 'PROD-001',
            //         stock: 20
            //     }
            // ]
            //Validar que no se repita el campo code
            //esto es parecido a la lógica de agregar participante al envento

    }

    //Necesito saber el evento al cual quiero inscribirme // id del evento
    //El participante va a estar representado por un id
    agregarParticipante = (idEvento, idParticipante) => {
        const eventoIndex = this.eventos
            .findIndex(evento => evento.id === idEvento);
        
        if(eventoIndex === -1) {
            console.log('Evento no encontrado');
            return;
        }

        // Validar que el participante no se haya inscrito antes
        const usuarioRegistrado =
             this.eventos[eventoIndex].participantes.includes(idParticipante);
        
        if(usuarioRegistrado) {
            console.log('Usuario ya registrado');
            return;
        }

        this.eventos[eventoIndex].participantes.push(idParticipante);
    }
}

const manejadorEventos = new TicketManager();

manejadorEventos.agregarEventos('Evento coder 1', 'Argentina', 200, 50000);
manejadorEventos.agregarEventos('Evento coder 3', 'Argentina', 200);
manejadorEventos.agregarEventos('Evento coder 2', 'Colombia', 500, 100000);
manejadorEventos.agregarParticipante(1, 1234);
manejadorEventos.agregarParticipante(2, 1234);
manejadorEventos.agregarParticipante(3, 1234);
manejadorEventos.agregarParticipante(4, 1234);
manejadorEventos.agregarParticipante(1, 1234);

console.log(manejadorEventos.getEventos());