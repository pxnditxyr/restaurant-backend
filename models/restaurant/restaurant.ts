import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';

// CREATE TABLE IF NOT EXISTS db_restaurant.restaurant (
//     restaurant_id INT NOT NULL AUTO_INCREMENT,
//     restaurant_name VARCHAR( 50 ) NOT NULL,
//     restaurant_description VARCHAR( 255 ) NOT NULL,
//     abbreviation VARCHAR( 4 ) NOT NULL,
//     --  address_id INT NOT NULL,
//     address VARCHAR( 255 ) NOT NULL, -- XD review this
//     phone INT NOT NULL,
//     contact_email VARCHAR( 255 ) NOT NULL,
//     logo VARCHAR( 255 ) NULL,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( restaurant_id )
// );

export const Restaurant = db.define( 'restaurant', {
    restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    restaurant_name: {
        type: DataTypes.STRING( 50 ),
        allowNull: false
    },
    restaurant_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    abbreviation: {
        type: DataTypes.STRING( 4 ),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    contact_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ...createdUpdated
}, {
    freezeTableName: true,
});
