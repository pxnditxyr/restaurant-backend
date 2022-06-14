import { Food } from '../../../models/products/food';

interface FoodCreator {
    product_id: number;
    ingredients: string;
    food_type: number;
};

export const foodCreator = async ( food : FoodCreator ) => {
    try {
        const newFood = Food.build({ ...food });
        await newFood.save();
        return newFood;
    } catch ( error ) {
        return `Error creating Food: ${ error }`;
    }
};

