import { Rating } from '../../../models/restaurant/rating';

interface RatingInterface {
    restaurant_id: number;
    customer: number;
    title: string;
    rating_comment: string;
};

export const createRating = async ( rating : RatingInterface ) => {
    try {
        const newRating = Rating.build({ ...rating });
        await newRating.save();
        return newRating;
    } catch ( error ) {
        return error;
    }
};
