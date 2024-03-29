const purchase = async (req, res) => {
    try {
        const { cid } = req.params;
        const { user } = req.user;

        const result = await cartsService.purchase(cid, user);
        
        res.send({ result });
    } catch (error) {
        req.logger.error(error.message);
        res.status(500).send()
    }
}