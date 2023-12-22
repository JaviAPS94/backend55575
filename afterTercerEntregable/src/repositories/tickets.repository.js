export default class TicketRepository {
    save = async(ticket) => {
        const result = await this.dao.save(ticket);
        return result;
    }
}