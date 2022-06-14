import { Product } from '../../../models/products/product';

interface ProductCreator {
    product_name: string;
    product_description: string;
    price: number;
    stock: number;
    product_category: number;
};

export const productCreator = async ( product : ProductCreator ) => {
    try {
        const newProduct = Product.build({ ...product });
        await newProduct.save();
        return newProduct;
    } catch ( error ) {
        return `Error creating Product: ${ error }`;
    }
};

