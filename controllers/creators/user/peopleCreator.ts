import { Model } from 'sequelize';
import { People } from '../../../models/user/people';

interface PeopleInterface {
    first_name: string;
    last_name: string;
    dni: number;
    birthday: Date;
    phone: number;
    gender: number;
};

export const createPeople = async ( people : PeopleInterface ) : Promise<Model<any, any> | string>  => {
    try {
        const newPeople = People.build({ ...people });
        await newPeople.save();
        return newPeople;
    } catch ( error ) {
        return `Error: ${ error }`;
    }
};
