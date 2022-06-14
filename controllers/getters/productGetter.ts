import { Op } from 'sequelize';
import { Product } from '../../models/products/product';
import { Drink } from '../../models/products/drink';
import { Food } from '../../models/products/food';

export const getAllProducts = async () => {
    const products = await Product.findAll();
    return products;
};

export const getActiveProducts = async () => {
    const products = await Product.findAll({
        where: {
            state: {
                [ Op.eq ]: true
            }
        }
    });
    return products;
};

export const getProductById = async ( id : number ) => {
    const product = await Product.findByPk( id );
    return product;
};

export const getActiveProductById = async ( id : number ) => {
    const product = await Product.findByPk( id );
    if ( product ) {
        if ( product.getDataValue( 'state' ) )
            return product;
    }
    return null;
};

export const getProductsByProductName = async ( productName : string ) => {
    const products = await Product.findAll({
        where: {
            product_name: {
                [ Op.like ]: `%${ productName }%`
            }
        }
    });
    return products;
};

export const getProductsByProductCategory = async ( productCategory : number ) => {
    const products = await Product.findAll({
        where: {
            product_category: productCategory
        }
    });
    return products;
};

export const getAllFoods = async () => {
    const foods = await Food.findAll();
    return foods;
};

export const getFoodById = async ( id : number ) => {
    const food = await Food.findByPk( id );
    return food;
};

export const getFoodByFoodType = async ( foodType : number ) => {
    const food = await Food.findAll({
        where: {
            food_type: foodType
        }
    });
    return food;
};

export const getAllDrinks = async () => {
    const drinks = await Drink.findAll();
    return drinks;
};

export const getDrinkById = async ( id : number ) => {
    const drink = await Drink.findByPk( id );
    return drink;
};

export const getDrinkByFlavor = async ( flavor : number ) => {
    const drink = await Drink.findAll({
        where: {
            flavor: flavor
        }
    });
    return drink;
};

export const getDrinkByCarbonated = async ( carbonated : boolean ) => {
    const drink = await Drink.findAll({
        where: {
            carbonated: carbonated
        }
    });
    return drink;
};
