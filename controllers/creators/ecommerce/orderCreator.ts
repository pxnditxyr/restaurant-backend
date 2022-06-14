import { Order } from '../../../models/ecommerce/order';

interface OrderCreator {
    cashier?: number | null;
    customer: number;
    restaurant_id: number;
    order_date: Date;
    table_id?: number | null;
};

export const orderCreator = async ( order : OrderCreator ) => {
    try {
        const newOrder = Order.build({ ...order  });
        await newOrder.save();
        return newOrder;
    } catch ( error ) {
        return `Error creating order: ${ error }`;
    }
};
