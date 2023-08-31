class TicketManager {
    #precioBaseGanancia = 0.15;

    constructor() {
        this.eventos = [];
    }

    getEventos = () => {
        return this.eventos;
    }

    agregarEventos = (
        nombre,
        lugar, precio, capacidad = 50, fecha = new Date().toDateString() ) => {
            const evento = {
                nombre,
                lugar,
                precio: precio + precio * this.#precioBaseGanancia,
                capacidad,
                fecha,
                participantes: []
            }
            // [{id: 1, evento: 'Conccierto'}, {id: 2}]
            if (this.eventos.length === 0) {
                evento.id = 1;
            } else {
                evento.id = this.eventos[this.eventos.length - 1].id + 1;
            }

            this.eventos.push(evento);
    }
}

const manejadorEventos = new TicketManager();

manejadorEventos.agregarEventos('Evento coder 1', 'Argentina', 200, 50000);
manejadorEventos.agregarEventos('Evento coder 3', 'Argentina', 200);
manejadorEventos.agregarEventos('Evento coder 2', 'Colombia', 500, 100000);

console.log(manejadorEventos.getEventos());