import { UserAddress } from '../../../models/user/userAddress';

interface UserAddressInterface {
    country: string;
    state_address: string;
    city: string;
    street: string;
}

export const createUserAddress = async ( userAddress : UserAddressInterface ) => {
    try {
        const newUserAddress = UserAddress.build({ ...userAddress });
        await newUserAddress.save();
        return newUserAddress;
    } catch ( error ) {
        return error;
    }
};
