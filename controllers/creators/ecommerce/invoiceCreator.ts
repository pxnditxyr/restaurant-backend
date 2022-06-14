import { Invoice } from '../../../models/ecommerce/invoice';

interface InvoiceCreator {
    order_id: number;
    restaurant_id: number;
    invoice_authorization_data_id: number;
    nit: number;
    last_name: string;
    invoice_date: Date;
    total_amount: number;
    control_code: string;
};

export const invoiceCreator = async ( invoice : InvoiceCreator ) => {
    try {
        const newInvoice = Invoice.build({ ...invoice  });
        await newInvoice.save();
        return newInvoice;
    } catch ( error ) {
        return `Error creating invoice: ${ error }`;
    }
};
