import { Op } from 'sequelize';
import { People } from '../../models/user/people';


export const getAllPeople = async () => {
    console.log( People )
    const people = await People.findAll();
    return people;
};

export const getPeopleById = async ( id : number ) => {
    const people = await People.findByPk( id );
    return people;
}

export const getPeopleByDNI = async ( dni : number ) => {
    const people = await People.findOne({
        where: {
            dni
        }
    });
    return people;
};

export const getPeopleByLastName = async ( lastName : string ) => {
    const people = await People.findAll({
        where: {
            last_name: {
                [ Op.like ]: `%${ lastName.toLowerCase() }%`
            }
        }
    });
    return people;
};

export const getPeopleByFirstName = async ( firstName : string ) => {
    const people = await People.findAll({
        where: {
            first_name : {
                [ Op.like ]: `%${ firstName.toLowerCase() }%`
            }
        }
    });
    return people;
};

export const getPeopleByGender = async ( gender : number ) => {
    const people = await People.findAll({
        where: {
            gender
        }
    });
    return people;
};
