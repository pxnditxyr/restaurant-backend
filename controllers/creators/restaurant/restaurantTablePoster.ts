import { RestaurantTable } from '../../../models/restaurant/restaurantTable';

interface RestaurantTableInterface {
    restaurant_id: number;
    restaurant_table_description: string;
    table_number: number;
    number_chairs: number;
    place: number;
};

export const createRestaurantTable = async ( restaurantTable : RestaurantTableInterface ) => {
    try {
        const newRestaurantTable = RestaurantTable.build({ ...restaurantTable });
        await newRestaurantTable.save();
        return newRestaurantTable;
    } catch ( error ) {
        return error;
    }
};
