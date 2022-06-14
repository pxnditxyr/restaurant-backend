import { Request, Response } from 'express';
import { drinkCreator, productCreator, foodCreator } from '../creators/product';
import { productMenuCreator, menuCreator } from '../creators/menu';
import { getSubdomainByDetail } from '../getters/lookupGetter';
import { getCareDayByCareDayNameAndRestaurantId } from '../getters/restaurant';

export const bossPostDrink = async ( req : Request, res : Response ) => {
    const {
        product_name,
        product_description,
        price,
        stock,
        product_category,
        size_drink,
        brand,
        flavor,
        carbonated,
    } = req.body;

    const subdomainProductCategory = await getSubdomainByDetail( product_category );
    if ( !subdomainProductCategory ) {
        return res.status( 400 ).json({
            message: `Product category ${ product_category } not found`,
        });
    }
    const productCategoryId = subdomainProductCategory.getDataValue( 'lookup_subdomain_id' );
    const newProduct = await productCreator({ product_name, product_description, price, stock, product_category: productCategoryId })

    if ( typeof newProduct === 'string' ) {
        return res.status( 400 ).json({
            message: newProduct,
        });
    }

    const productId = newProduct.getDataValue( 'product_id' );
    const subdomainFlavor = await getSubdomainByDetail( flavor );
    if ( !subdomainFlavor ) {
        return res.status( 400 ).json({
            message: `Flavor ${ flavor } not found`,
        });
    };
    const flavorId = subdomainFlavor.getDataValue( 'lookup_subdomain_id' );
    const newDrink = await drinkCreator({ product_id: productId, size_drink, brand, flavor: flavorId, carbonated });
    if ( typeof newDrink === 'string' ) {
        return res.status( 400 ).json({
            message: newDrink,
        });
    }
    return res.status( 200 ).json({
        message: 'Drink created',
    });
};

export const bossPostFood = async ( req : Request, res : Response ) => {
    const {
        product_name,
        product_description,
        price,
        stock,
        product_category,
        ingredients,
        food_type,
    } = req.body;

    const subdomainProductCategory = await getSubdomainByDetail( product_category );
    if ( !subdomainProductCategory ) {
        return res.status( 400 ).json({
            message: `Product category ${ product_category } not found`,
        });
    }
    const productCategoryId = subdomainProductCategory.getDataValue( 'lookup_subdomain_id' );
    const newProduct = await productCreator({ product_name, product_description, price, stock, product_category: productCategoryId })
    if ( typeof newProduct === 'string' ) {
        return res.status( 400 ).json({
            message: newProduct,
        });
    }
    
    const productId = newProduct.getDataValue( 'product_id' );
    const subdomainFoodType = await getSubdomainByDetail( food_type );
    if ( !subdomainFoodType ) {
        return res.status( 400 ).json({
            message: `Food type ${ food_type } not found`,
        });
    }
    const foodTypeId = subdomainFoodType.getDataValue( 'lookup_subdomain_id' );
    const newFood = await foodCreator({ product_id: productId, ingredients, food_type: foodTypeId });
    if ( typeof newFood === 'string' ) {
        return res.status( 400 ).json({
            message: newFood,
        });
    }
    return res.status( 200 ).json({
        message: 'Food created',
    });
};

export const bossPostMenu = async ( req : Request, res : Response ) => {
    const {
        product_ids, 
        product_menu_description,
        name,
        description,
        menu_date,
        care_day,
    } = req.body;

    console.log( `This is product Ids ${ product_ids }` );

    const careDay = await getCareDayByCareDayNameAndRestaurantId( care_day, 1 );
    if ( !careDay ) {
        return res.status( 400 ).json({
            message: `Care day ${ care_day } not found`,
        });
    };
    const careDayId = careDay.getDataValue( 'care_day_id' );

    const newMenu = await menuCreator({ name, description, menu_date, care_day_id: careDayId });
    if ( typeof newMenu === 'string' ) {
        return res.status( 400 ).json({
            message: newMenu,
        });
    }
    const menuId = newMenu.getDataValue( 'menu_id' );
    product_ids.map( async ( product_id : number ) => {
        const newProductMenu = await productMenuCreator({ menu_id: menuId, product_id, product_menu_description });
        if ( typeof newProductMenu === 'string' ) {
            return res.status( 400 ).json({
                message: newProductMenu,
            });
        }
    });
    return res.status( 200 ).json({
        message: 'Menu created',
    });
};
