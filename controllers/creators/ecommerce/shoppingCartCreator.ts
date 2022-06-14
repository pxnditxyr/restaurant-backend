import { ShoppingCart } from '../../../models/ecommerce/shoppingCart';

interface ShoppingCartCreator {
    customer: number;
    restaurant_id: number;
    total_amount: number;
    shopping_cart_date: Date;
};

export const shoppingCartCreator = async ( shoppingCart : ShoppingCartCreator ) => {
    try {
        const newShoppingCart = ShoppingCart.build({ ...shoppingCart  });
        await newShoppingCart.save();
        return newShoppingCart;
    } catch ( error ) {
        return `Error creating Shopping Cart: ${ error }`;
    }
};
