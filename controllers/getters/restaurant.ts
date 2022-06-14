import { Op } from 'sequelize';
import { Restaurant } from '../../models/restaurant/restaurant';
import { RestaurantTable } from '../../models/restaurant/restaurantTable';
import { Rating } from '../../models/restaurant/rating';
import { CareDay } from '../../models/restaurant/careDay';
import { OpeningHours } from '../../models/restaurant/openingHours';

export const getAllRestaurants = async () => {
    const restaurants = await Restaurant.findAll();
    return restaurants;
};

export const getRestaurantById = async ( id : number ) => {
    const restaurant = await Restaurant.findByPk( id );
    return restaurant;
};

export const getRestaurantByRestaurantName = async ( restaurantName : string ) => {
    const restaurant = await Restaurant.findOne({
        where: {
            restaurant_name: {
                [ Op.like ]: `%${ restaurantName }%`
            }
        }
    });
    return restaurant;
};

export const getRestaurantTables = async () => {
    const restaurantTables = await RestaurantTable.findAll();
    return restaurantTables;
};

export const getRestaurantTableById = async ( id : number ) => {
    const restaurantTable = await RestaurantTable.findByPk( id );
    return restaurantTable;
}

export const getRestaurantTablesByRestaurantId = async ( restaurantId : number ) => {
    const restaurantTables = await RestaurantTable.findAll({
        where: {
            restaurant_id: restaurantId
        }
    });
    return restaurantTables;
};

export const getAllRatings = async () => {
    const ratings = await Rating.findAll();
    return ratings;
}

export const getRatingByRestaurantId = async ( restaurantId : number ) => {
    const rating = await Rating.findOne({
        where: {
            restaurant_id: restaurantId
        }
    });
    return rating;
};

export const getRatingByCustomer = async ( customer : number ) => {
    const rating = await Rating.findOne({
        where: {
            customer
        }
    });
    return rating;
};

export const getRatingByRatingValueAndRestaurantId = async ( ratingValue : number, restaurantId : number ) => {
    const rating = await Rating.findOne({
        where: {
            rating_value: ratingValue,
            restaurant_id: restaurantId
        }
    });
    return rating;
};

export const getAllCareDays = async () => {
    const careDays = await CareDay.findAll();
    return careDays;
};

export const getCareDayByCareDayId = async ( careDayId : number ) => {
    const careDay = await CareDay.findByPk( careDayId );
    return careDay;
}

export const getCareDaysByRestaurantId = async ( restaurantId : number ) => {
    const careDays = await CareDay.findAll({
        where: {
            restaurant_id: restaurantId
        }
    });
    return careDays;
};

export const getCareDayByCareDayName = async ( careDayName : string ) => {
    const careDay = await CareDay.findOne({
        where: {
            care_day_name: careDayName,
        }
    });
    return careDay;
};

export const getCareDayByCareDayNameAndRestaurantId = async ( careDayName : string, restaurantId : number ) => {
    const careDay = await CareDay.findOne({
        where: {
            care_day_name: careDayName,
            restaurant_id: restaurantId
        }
    });
    return careDay;
};

export const getAllOpeningHours = async () => {
    const openingHours = await OpeningHours.findAll();
    return openingHours;
};

export const getOpeningHoursByCareDayId = async ( careDayId : number ) => {
    const openingHours = await OpeningHours.findOne({
        where: {
            care_day_id: careDayId
        }
    });
    return openingHours;
};
