import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';

import { createPeople, createUserAccount } from '../creators/user';
import { orderCreator, orderDetailCreator } from '../creators/ecommerce';

import { getSubdomainByDetail } from '../getters/lookupGetter';
import { getPeopleByDNI } from '../getters/peopleGetter';
import { getUserAccountByEmail, getUserAccountById, getUserAccountByUsername } from '../getters/userAccountGetter';
import { getRestaurantById, getRestaurantTableById } from '../getters/restaurant';
import { productMenuCreator } from '../creators/menu';
import { getProductById } from '../getters/productGetter';

export const cashierPostNewCustomer = async ( req : Request, res : Response ) => {
    const {
        first_name,
        last_name,
        dni,
        birthday,
        phone,
        gender,
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
    const subdomainRole = await getSubdomainByDetail( 'customer' );
    if ( !subdomainRole ) {
        return res.status( 400 ).json({
            message: `Role customer not found`,
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
}

export const cashierPostNewOrder = async ( req : Request, res : Response ) => {
    const {
        cashier,
        customer,
        restaurant_id,
        order_date,
        table,
        product_ids,
        quantity,
    } = req.body;

    const existingCustomer = await getUserAccountById( parseInt( customer ) );

    if ( !existingCustomer ) {
        return res.status( 400 ).json({
            message: `User with id ${ customer } not found`,
        });
    }

    const existingRestaurant = await getRestaurantById( parseInt( restaurant_id ) );
    if ( !existingRestaurant ) {
        return res.status( 400 ).json({
            message: `Restaurant with id ${ restaurant_id } not found`,
        });
    }

    let order;
    if ( typeof table !== 'undefined' ) {
        const tableSubdomain = await getSubdomainByDetail( table );
        if ( !tableSubdomain ) {
            return res.status( 400 ).json({
                message: `Table ${ table } not found`,
            });
        }

        const tableId : number = parseInt( tableSubdomain.getDataValue( 'lookup_subdomain_id' ) );
        const tableWithId = getRestaurantTableById( tableId );
        if ( !tableWithId ) {
            return res.status( 400 ).json({
                message: `Table ${ table } not found`,
            });
        }
        order = await orderCreator({ cashier, customer, restaurant_id, order_date, table_id: tableId });
    } else {
        const tableId = null;
        order = await orderCreator({ cashier, customer, restaurant_id, order_date, table_id: tableId });
    }

    if ( typeof order === 'string' ) {
        return res.status( 400 ).json({
            message: `Error creating order ${ order }`,
        });
    }
    const orderId = parseInt( order.getDataValue( 'order_id' ) );

    product_ids.map( async ( product_id : number, index : number ) => {
        const existingProduct = await getProductById( product_id );
        if ( !existingProduct ) {
            return res.status( 400 ).json({
                message: `Product with id ${ product_id } not found`,
            });
        }
        const unitPrice : number = existingProduct.getDataValue( 'price' );
        const newOrderProduct = await orderDetailCreator({ order_id: orderId, product_id, quantity: quantity[ index ], unit_price: unitPrice });
        if ( typeof newOrderProduct === 'string' ) {
            return res.status( 400 ).json({
                message: newOrderProduct,
            });
        }
    });

    return res.status( 200 ).json({
        message: 'Order created',
    });

};
