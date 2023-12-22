// importar dependencia de uuid

const generatePurchase = async (user, amount) => {
    const newTicket = {
        code: uuidv4(),
        purchase_datetime: new Date().toLocaleString(),
        amount,
        purchaser: user.email
    }

    //usar el ticketRepository para guardad el ticket generado
    await ticketRepository.save(newTicket);
}