export default class Ticket {
    save = async (ticket) => {
        return await ticketModel.create(ticket);
    }
}