import { UserAccount } from '../../../models/user/userAccount';

interface UserAccountInterface {
    people_id: number;
    user_role: number;
    username: string;
    email: string;
    passwd: string;
}

export const createUserAccount = async ( userAccount: UserAccountInterface ) => {
    try {
        const newUserAccount = UserAccount.build({ ...userAccount });
        await newUserAccount.save();
        return newUserAccount;
    } catch ( error ) {
        return `Error creating user account`;
    }
};
