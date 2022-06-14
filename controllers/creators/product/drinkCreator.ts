import { Drink } from '../../../models/products/drink';

interface DrinkCreator {
    product_id: number;
    size_drink: string;
    brand: string;
    flavor: number;
    carbonated: boolean;
};

export const drinkCreator = async ( drink : DrinkCreator ) => {
    try {
        const newDrink = Drink.build({ ...drink });
        await newDrink.save();
        return newDrink;
    } catch ( error ) {
        return `Error creating drink: ${ error }`;
    }
};

