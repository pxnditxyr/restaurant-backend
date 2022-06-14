import { OrderDetail } from '../../../models/ecommerce/orderDetail';

interface OrderDetailCreator {
    order_id: number;
    product_id: number;
    quantity: number;
    unit_price: number;
};

export const orderDetailCreator = async ( orderDetail : OrderDetailCreator ) => {
    try {
        const newOrderDetail = OrderDetail.build({ ...orderDetail  });
        await newOrderDetail.save();
        return newOrderDetail;
    } catch ( error ) {
        return `Error creating order detail: ${ error }`;
    }
};
