import { ShoppingCartProduct } from '../../../models/ecommerce/shoppingCartProduct';

interface ShoppingCartProductCreator {
    customer: number;
    restaurant_id: number;
    total_amount: number;
    shopping_cart_date: Date;
};

export const shoppingCartProductCreator = async ( shoppingCartProduct : ShoppingCartProductCreator ) => {
    try {
        const newShoppingCartProduct = ShoppingCartProduct.build({ ...shoppingCartProduct  });
        await newShoppingCartProduct.save();
        return newShoppingCartProduct;
    } catch ( error ) {
        return `Error creating Shopping Cart Product: ${ error }`;
    }
};
