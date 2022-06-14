import { Op } from 'sequelize';
import { UserAccount } from '../../models/user/userAccount';

export const getAllUserAccounts = async () => {
    const userAccounts = await UserAccount.findAll();
    return userAccounts;
};

export const getActiveUserAccounts = async () => {
    const userAccounts = await UserAccount.findAll({
        where: {
            state: true,
        },
    });
    return userAccounts;
};

export const getInactiveUserAccounts = async () => {
    const userAccounts = await UserAccount.findAll({
        where: {
            state: false,
        },
    });
    return userAccounts;
};
            

export const getUserAccountById = async ( id : number ) => {
    const userAccount = await UserAccount.findByPk( id );
    return userAccount;
};

export const getUserAccountByPeopleId = async ( personId : number ) => {
    const userAccount = await UserAccount.findOne({
        where: {
            people_id: personId
        }
    });
    return userAccount;
};

export const getUserAccountByUserRole = async ( userRole : number ) => {
    const userAccount = await UserAccount.findOne({
        where: {
            user_role: userRole
        }
    });
    return userAccount;
};


export const getUserAccountByEmail = async ( email : string ) => {
    const userAccounts = await UserAccount.findOne({
        where: {
            email: {
                [ Op.eq ]: `%${ email.toLowerCase() }%`
            }
        }
    });
    return userAccounts;
};

export const getUserAccountByUsername = async ( username : string ) => {
    const userAccount = await UserAccount.findOne({
        where: {
            username: {
                [ Op.eq ]: `%${ username.toLowerCase() }%`
            }
        }
    });
    return userAccount;
};
