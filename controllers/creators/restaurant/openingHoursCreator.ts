import { OpeningHours } from '../../../models/restaurant/openingHours';

interface OpeningHoursInterface {
    care_day_id: number;
    start_time: Date;
    end_time: Date;
    start_break_time: Date;
    end_break_time: Date;
};

export const createOpeningHour = async ( openingHour : OpeningHoursInterface ) => {
    try {
        const newOpeningHour = OpeningHours.build({ ...openingHour });
        await newOpeningHour.save();
        return newOpeningHour;
    } catch ( error ) {
        return error;
    }
};
