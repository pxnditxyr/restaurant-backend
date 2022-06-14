import { Payment } from '../../../models/ecommerce/payment';

interface PaymentCreator {
    invoice_id: number;
    payment_method_id: number;
    payment_date: Date;
    payment_amount: number;
};

export const paymentCreator = async ( payment : PaymentCreator ) => {
    try {
        const newPayment = Payment.build({ ...payment  });
        await newPayment.save();
        return newPayment;
    } catch ( error ) {
        return `Error creating payment: ${ error }`;
    }
};
