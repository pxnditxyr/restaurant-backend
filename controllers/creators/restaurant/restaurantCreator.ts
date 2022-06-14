import { Restaurant } from '../../../models/restaurant/restaurant';

interface RestaurantInterface {
    restaurant_name: string;
    restaurant_description: string;
    abbreviation: string;
    address: string;
    phone: number;
    contact_email: string;
};

export const createRestaurant = async ( restaurant : RestaurantInterface ) => {
    try {
        const newRestaurant = Restaurant.build({ ...restaurant });
        await newRestaurant.save();
        return newRestaurant;
    } catch ( error ) {
        return error;
    }
};
