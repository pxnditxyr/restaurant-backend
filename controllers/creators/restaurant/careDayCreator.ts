import { CareDay } from '../../../models/restaurant/careDay';

interface CareDayInterface {
    restaurant_id: number;
    care_day_name: string;
    abbreviation: string;
};

export const createCareDay = async ( careDay : CareDayInterface ) => {
    try {
        const newCareDay = CareDay.build({ ...careDay });
        await newCareDay.save();
        return newCareDay;
    } catch ( error ) {
        return error;
    }
};
