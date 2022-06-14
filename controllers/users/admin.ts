import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import { getAllPeople, getPeopleByDNI, getPeopleByLastName, } from '../getters/peopleGetter';
import {
    getAllUserAccounts,
    getActiveUserAccounts,
    getInactiveUserAccounts,
    getUserAccountByPeopleId,
    getUserAccountByUserRole,
    getUserAccountByUsername,
    getUserAccountByEmail 
} from '../getters/userAccountGetter';
import { getSubdomainByDetail } from '../getters/lookupGetter';
import { createUserAccount, createPeople } from '../creators/user';
import { validationResult } from 'express-validator';


export const adminGetAllPeople = async ( req : Request, res : Response ) => {
    const people = await getAllPeople();
    if ( !people ) {
        return res.status( 404 ).json({
            message: 'No people found'
        })
    }
    res.json( people );
};

export const adminGetPeopleByDNI = async ( req : Request, res : Response ) => {
    const { dni } = req.params;
    const people = await getPeopleByDNI( parseInt( dni ) );
    if ( !people ) {
        return res.status( 404 ).json({
            message: `People with dni ${ dni } not found`,
        });
    }
    return res.json( people );
};
export const adminGetPeopleByLastName = async ( req : Request, res : Response ) => {
    const { lastName } = req.body;
    const people = await getPeopleByLastName( lastName );
    if ( people.length === 0 ) {
        return res.status( 404 ).json({
            message: `People with lastName ${ lastName } not found`,
        });
    }
    return res.json( people );
}

export const adminGetAllUserAccounts = async ( req : Request, res : Response ) => {
    const userAccounts = await getAllUserAccounts();
    res.json( userAccounts );
};

export const adminGetActiveUserAccounts = async ( req : Request, res : Response ) => {
    const userAccounts = await getActiveUserAccounts();
    res.json( userAccounts );
};

export const adminGetInactiveUserAccounts = async ( req : Request, res : Response ) => {
    const userAccounts = await getInactiveUserAccounts();
    res.json( userAccounts );
};

export const adminGetUserAccountByDNI = async ( req : Request, res : Response ) => {
    const { dni } = req.params;
    const people = await getPeopleByDNI( parseInt( dni ) );
    if ( !people ) {
        return res.status( 404 ).json({
            message: `User with dni ${ dni } not found`,
        });
    }
    const peopleId = parseInt( people.getDataValue( 'people_id' ) );
    const userAccount = await getUserAccountByPeopleId( peopleId );
    if ( !userAccount ) {
        return res.status( 404 ).json({
            message: `User with dni ${ dni } not found`,
        });
    }
    return res.json( userAccount );
};

export const adminGetUserAccountsByRole = async ( req : Request, res : Response ) => {
    const { role } = req.body;
    const subdomain = await getSubdomainByDetail( role );
    if ( !subdomain ) {
        return res.status( 404 ).json({
            message: `Role ${ role } not found`,
        });
    }
    const userRole = parseInt( subdomain.getDataValue( 'subdomain_id' ) );
    const userAccounts = await getUserAccountByUserRole( userRole );
    if ( !userAccounts ) {
        return res.status( 404 ).json({
            message: `User with role ${ role } not found`,
        });
    }
    return res.json( userAccounts );
};

export const adminPostNewUser = async ( req : Request, res : Response ) => {
    
    const {
        first_name,
        last_name,
        dni,
        birthday,
        phone,
        gender,
        user_role,
        username,
        email,
        passwd
    } = req.body;

    const existingPeople = await getPeopleByDNI( parseInt( dni ) );

    if ( existingPeople ) {
        return res.status( 400 ).json({
            message: `People with dni ${ dni } already exists`,
        });
    }

    const existingUserAccountByUsername = await getUserAccountByUsername( username );
    const existingUserAccountByEmail = await getUserAccountByEmail( email );

    if ( existingUserAccountByUsername ) {
        return res.status( 400 ).json({
            message: `User with username ${ username } already exists`,
        });
    }

    if ( existingUserAccountByEmail  ) {
        return res.status( 400 ).json({
            message: `User with email ${ email } already exists`,
        });
    }

    const dateBirthday = new Date( birthday );
    const subdomainGender = await getSubdomainByDetail( gender );
    if ( !subdomainGender ) {
        return res.status( 400 ).json({
            message: `Gender ${ gender } not found`,
        });
    }
    const genderId = parseInt( subdomainGender.getDataValue( 'lookup_subdomain_id' ) );
    const people = await createPeople({ first_name, last_name, dni, birthday: dateBirthday, phone, gender: genderId });

    if ( typeof people === 'string' ) {
        return res.status( 400 ).json({
            message: `Error creating people`,
        });
    }
    const subdomainRole = await getSubdomainByDetail( user_role );
    if ( !subdomainRole ) {
        return res.status( 400 ).json({
            message: `Role ${ user_role } not found`,
        });
    }

    const userRoleId = parseInt( subdomainRole.getDataValue( 'lookup_subdomain_id' ) );
    const salt = bcryptjs.genSaltSync();
    const hash = bcryptjs.hashSync( passwd, salt );
    const peopleId = parseInt( people.getDataValue( 'people_id' ) );
    const userAccount = await createUserAccount({ user_role: userRoleId, username, email, passwd: hash, people_id: peopleId });

    if ( typeof userAccount === 'string' ) {
        return res.status( 400 ).json({
            message: `Error creating user`,
        });
    }
    return res.json( userAccount );
};
