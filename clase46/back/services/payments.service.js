import Stripe from "stripe";

export default class PaymentService {
    constructor() {
        this.stripe = new Stripe('sk_test_51OoEBOIQS2v7SrBZYH3G3dmtXpxVXOjSYaYBlXOcReqa9Ms8ZQ4INRWEQVgWMR5FfRCKPe08AusFde0ibvxXwgce00mn9tkciU');
    }

    createPaymentIntent = async (data) => {
        const paymentIntent = this.stripe.paymentIntents.create(data);
        return paymentIntent;
    }
}