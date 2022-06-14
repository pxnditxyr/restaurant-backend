import { Router } from 'express';
import { check } from 'express-validator';
import { cashierPostNewCustomer, cashierPostNewOrder } from '../../controllers/users/cashier';
import { fieldValidator } from '../../middlewares/fieldValidator';

const router = Router();

router.post( '/customer', [
    check( 'first_name', 'First Name is required' ).trim().not().isEmpty(),
    check( 'last_name', 'Last Name is required' ).trim().not().isEmpty(),
    check( 'dni', 'DNI is required' ).trim().not().isEmpty(),
    check( 'birthday', 'Birthday is required' ).trim().not().isEmpty(),
    check( 'phone', 'Phone is required' ).trim().not().isEmpty(),
    check( 'gender', 'Gender is required' ).trim().not().isEmpty(),
    check( 'username', 'Username is required' ).trim().not().isEmpty(),
    check( 'email', 'Invalid Email is required' ).trim().isEmail(),
    check( 'passwd', 'Must be at least 8 characters and has 1 Number, 1 Simbold, 1 Capital letter and 1 Lower Case letter' ).isLength({ min: 8 }),
    fieldValidator,
], cashierPostNewCustomer );

router.post( '/order', [
    check( 'customer', 'Customer is required' ).trim().not().isEmpty(),
    check( 'restaurant_id', 'Restaurant is Required' ).trim().not().isEmpty(),
    check( 'order_date', 'Order Date is required' ).trim().not().isEmpty(),
    check( 'product_ids', 'Product ids is required' ),
    check( 'quantities', 'Quantities is required' ),
    fieldValidator,
], cashierPostNewOrder );

export default router;


