import { Router } from 'express';
import { check } from 'express-validator';
import { 
    adminGetAllPeople,
    adminGetPeopleByDNI,
    adminGetPeopleByLastName,
    adminGetAllUserAccounts,
    adminGetActiveUserAccounts,
    adminGetInactiveUserAccounts,
    adminGetUserAccountByDNI,
    adminGetUserAccountsByRole,
    adminPostNewUser,
} from '../../controllers/users/admin';
import { fieldValidator } from '../../middlewares/fieldValidator';

const router = Router();

router.get( '/people', adminGetAllPeople );
router.get( '/people/dni/:dni', adminGetPeopleByDNI );
router.get( '/people/last-name', adminGetPeopleByLastName );
router.get( '/user-account', adminGetAllUserAccounts );
router.get( '/user-account/active', adminGetActiveUserAccounts );
router.get( '/user-account/inactive', adminGetInactiveUserAccounts );
router.get( '/user-account/dni/:dni', adminGetUserAccountByDNI );
router.get( '/user-account/role', adminGetUserAccountsByRole );


router.post( '/user-account/new-user/', [
    check( 'first_name', 'First Name is required' ).trim().not().isEmpty(),
    check( 'last_name', 'Last Name is required' ).trim().not().isEmpty(),
    check( 'dni', 'DNI is required' ).trim().not().isEmpty(),
    check( 'birthday', 'Birthday is required' ).trim().not().isEmpty(),
    check( 'phone', 'Phone is required' ).trim().not().isEmpty(),
    check( 'gender', 'Gender is required' ).trim().not().isEmpty(),
    check( 'user_role', 'Invalid User Role' ).trim().isIn([ 'boss', 'cashier', 'weiter', 'chef', 'customer' ]),
    check( 'username', 'Username is required' ).trim().not().isEmpty(),
    check( 'email', 'Invalid Email is required' ).trim().isEmail(),
    check( 'passwd', 'Must be at least 8 characters and has 1 Number, 1 Simbold, 1 Capital letter and 1 Lower Case letter' ).isLength({ min: 8 }),
    fieldValidator,
], adminPostNewUser );

export default router;
