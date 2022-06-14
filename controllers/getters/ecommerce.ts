import { Op } from 'sequelize';
import { Invoice } from '../../models/ecommerce/invoice';
import { InvoiceAuthorizationData } from '../../models/ecommerce/invoiceAuthorizationData';
import { Order } from '../../models/ecommerce/order';
import { OrderDetail } from '../../models/ecommerce/orderDetail';
import { Payment } from '../../models/ecommerce/payment';
import { PaymentMethod } from '../../models/ecommerce/paymentMethod';
import { ShoppingCart } from '../../models/ecommerce/shoppingCart';
import { ShoppingCartProduct } from '../../models/ecommerce/shoppingCartProduct';


export const getAllInvoices = async () => {
    const invoices = await Invoice.findAll();
    return invoices;
};

export const getActiveInvoices = async () => {
    const invoices = await Invoice.findAll({
        where: {
            state: {
                [ Op.eq ]: true,
            },
        },
    });
    return invoices;
};

export const getInvoiceById = async ( id : number ) => {
    const invoice = await Invoice.findByPk( id );
    return invoice;
};


export const getInvoiceByOrderId = async ( orderId : number ) => {
    const invoice = await Invoice.findOne({
        where: {
            order_id: orderId,
        },
    });
    return invoice;
};

export const getInvoicesByNit = async ( nit : number ) => {
    const invoices = await Invoice.findAll({
        where: {
            nit,
        },
    });
    return invoices;
};

export const getInvoicesByLastName = async ( lastName : string ) => {
    const invoices = await Invoice.findAll({
        where: {
            last_name: {
                [ Op.like ]: `%${ lastName }%`,
            }
        },
    });
    return invoices;
};

export const getAllInvoiceAuthorizationData = async () => {
    const invoiceAuthorizationData = await InvoiceAuthorizationData.findAll();
    return invoiceAuthorizationData;
};

export const getActiveInvoiceAuthorizationData = async () => {
    const invoiceAuthorizationData = await InvoiceAuthorizationData.findAll({
        where: {
            state: {
                [ Op.eq ]: true,
            },
        },
    });
    return invoiceAuthorizationData;
};

export const getInvoiceAuthorizationDataById = async ( id : number ) => {
    const invoiceAuthorizationData = await InvoiceAuthorizationData.findByPk( id );
    return invoiceAuthorizationData;
};

export const getAllOrders = async () => {
    const orders = await Order.findAll();
    return orders;
};

export const getActiveOrders = async () => {
    const orders = await Order.findAll({
        where: {
            state: {
                [ Op.eq ]: true,
            },
        },
    });
    return orders;
};

export const getOrderById = async ( id : number ) => {
    const order = await Order.findByPk( id );
    return order;
};

export const getOrdersByCashier = async ( cashier : number ) => {
    const orders = await Order.findAll({
        where: {
            cashier,
        },
    });
    return orders;
};

export const getOrdersByCustomer = async ( customer : number ) => {
    const orders = await Order.findAll({
        where: {
            customer,
        },
    });
    return orders;
};

export const getOrdersByDelivered = async ( delivered : boolean ) => {
    const orders = await Order.findAll({
        where: {
            delivered,
        },
    });
    return orders;
};

export const getOrdersByOrderDate = async ( orderDate : Date ) => {
    const orders = await Order.findAll({
        where: {
            order_date: {
                [ Op.eq ]: orderDate,
            },
        },
    });
    return orders;
};

export const getAllOrderDetail = async () => {
    const orderDetails = await OrderDetail.findAll();
    return orderDetails;
};

export const getOrderDetailById = async ( id : number ) => {
    const orderDetail = await OrderDetail.findByPk( id );
    return orderDetail;
};

export const getOrderDetailByOrderId = async ( orderId : number ) => {
    const orderDetail = await OrderDetail.findAll({
        where: {
            order_id: orderId,
        },
    });
    return orderDetail;
};

export const getAllPayments = async () => {
    const payments = await Payment.findAll();
    return payments;
};

export const getActivePayments = async () => {
    const payments = await Payment.findAll({
        where: {
            state: {
                [ Op.eq ]: true,
            },
        },
    });
    return payments;
};

export const getPaymentById = async ( id : number ) => {
    const payment = await Payment.findByPk( id );
    return payment;
};

export const getPaymentByInvoiceId = async ( invoiceId : number ) => {
    const payment = await Payment.findAll({
        where: {
            invoice_id: invoiceId,
        },
    });
    return payment;
};

export const getPaymentsByPaymentMethod = async ( paymentMethod : number ) => {
    const payments = await Payment.findAll({
        where: {
            payment_method: paymentMethod,
        },
    });
    return payments;
};

export const getPaymentsByPaymentDate = async ( paymentDate : Date ) => {
    const payments = await Payment.findAll({
        where: {
            payment_date: {
                [ Op.eq ]: paymentDate,
            },
        },
    });
    return payments;
};

export const getAllPaymentMethods = async () => {
    const paymentMethods = await PaymentMethod.findAll();
    return paymentMethods;
};

export const getPaymentMethodById = async ( id : number ) => {
    const paymentMethod = await PaymentMethod.findByPk( id );
    return paymentMethod;
};

export const getPaymentMethodByMethod = async ( method : string ) => {
    const paymentMethod = await PaymentMethod.findOne({
        where: {
            method,
        },
    });
    return paymentMethod;
};

export const getAllShoppingCarts = async () => {
    const shoppingCarts = await ShoppingCart.findAll();
    return shoppingCarts;
};

export const getActiveShoppingCarts = async () => {
    const shoppingCarts = await ShoppingCart.findAll({
        where: {
            state: {
                [ Op.eq ]: true,
            },
        },
    });
    return shoppingCarts;
};

export const getShoppingCartById = async ( id : number ) => {
    const shoppingCart = await ShoppingCart.findByPk( id );
    return shoppingCart;
};

export const getShoppingCartByCustomer = async ( customer : number ) => {
    const shoppingCart = await ShoppingCart.findAll({
        where: {
            customer,
        },
    });
    return shoppingCart;
};

export const getShoppingCartByShoppingCartDate = async ( shoppingCartDate : Date ) => {
    const shoppingCart = await ShoppingCart.findAll({
        where: {
            shopping_cart_date: {
                [ Op.eq ]: shoppingCartDate,
            },
        },
    });
    return shoppingCart;
};

export const getAllShoppingCartProduct = async () => {
    const shoppingCartProducts = await ShoppingCartProduct.findAll();
    return shoppingCartProducts;
};

export const getShoppingCartProductById = async ( id : number ) => {
    const shoppingCartProduct = await ShoppingCartProduct.findByPk( id );
    return shoppingCartProduct;
};

export const getShoppingCartProductByShoppingCartId = async ( shoppingCartId : number ) => {
    const shoppingCartProduct = await ShoppingCartProduct.findAll({
        where: {
            shopping_cart_id: shoppingCartId,
        },
    });
    return shoppingCartProduct;
};
