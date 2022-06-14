import { PaymentMethod } from '../../../models/ecommerce/paymentMethod';

interface PaymentMethodCreator {
    credit_card_id: number;
    payment_method_description: string;
    method: number;
};

export const paymentMethodCreator = async ( paymentMethod : PaymentMethodCreator ) => {
    try {
        const newPaymentMethod = PaymentMethod.build({ ...paymentMethod  });
        await newPaymentMethod.save();
        return newPaymentMethod;
    } catch ( error ) {
        return `Error creating Payment Method: ${ error }`;
    }
};
