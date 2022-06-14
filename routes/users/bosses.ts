import { Router } from 'express';
import { check } from 'express-validator';
import { bossPostDrink, bossPostFood, bossPostMenu } from '../../controllers/users/boss';
import { flavors } from '../../helpers/flavors';
import { fieldValidator } from '../../middlewares/fieldValidator';

const router = Router();

router.post( '/drink', [
    check( 'product_name', 'Product Name is required' ).trim().not().isEmpty(),
    check( 'product_description', 'Product description is required' ).trim().not().isEmpty(),
    check( 'price', 'Price is required' ).trim().not().isEmpty(),
    check( 'stock', 'Stock is required' ).trim().not().isEmpty(),
    check( 'product_category', 'Invalid product category' ).trim().isIn([ 'food', 'drink' ]),
    check( 'size_drink', 'Size Drink is required' ).trim().not().isEmpty(),
    check( 'brand', 'Brand is required' ).trim().not().isEmpty(),
    check( 'flavor', 'Invalid flavor' ).trim().isIn( flavors ),
    check( 'carbonated', 'Carbonated is required' ).trim().not().isEmpty(),
    fieldValidator,
], bossPostDrink );


router.post( '/food', [
    check( 'product_name', 'Product Name is required' ).trim().not().isEmpty(),
    check( 'product_description', 'Product description is required' ).trim().not().isEmpty(),
    check( 'price', 'Price is required' ).trim().not().isEmpty(),
    check( 'stock', 'Stock is required' ).trim().not().isEmpty(),
    check( 'product_category', 'Invalid product category' ).trim().isIn([ 'food', 'drink' ]),
    check( 'ingredients', 'Ingredients is required' ).trim().not().isEmpty(),
    check( 'food_type', 'Invalid Food Type' ).trim().isIn([ 'salad', 'soup', 'main dish', 'dessert' ]),
    fieldValidator,
], bossPostFood );

router.post( '/menu', [
    check( 'product_ids', 'Product Ids is required' ),
    check( 'product_menu_description', 'Food Menu Description is required' ).trim().not().isEmpty(),
    check( 'name', 'Name menu is required' ).trim().not().isEmpty(),
    check( 'description', 'Description is required' ).trim().not().isEmpty(),
    check( 'menu_date', 'Menu Date is required' ).trim().not().isEmpty(),
    check( 'care_day', 'Care Day is required' ).trim().not().isEmpty(),
    fieldValidator,
], bossPostMenu );



// router.get( '/user-account/dni/', getUserAccountByDNI  );
// router.post( '/', signupUser );
// router.put( '/:id', updateUser );
// router.delete( '/:id', deleteUser );

export default router;


