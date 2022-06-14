import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';

//
// CREATE TABLE IF NOT EXISTS db_restaurant.user_address (
//     address_id INT NOT NULL AUTO_INCREMENT,
//     user_account_id BIGINT NOT NULL,
//     country VARCHAR( 255 ) NOT NULL,
//     state_address VARCHAR( 255 ) NOT NULL,
//     city VARCHAR( 255 ) NOT NULL,
//     street VARCHAR( 255 ) NOT NULL,
//     street_number INT NULL,
//     street_floor INT NULL,
//     apartment INT NULL,
//     phone_number INT NULL,
//     zip_code INT NULL,
//     state BOOLEAN NOT NULL DEFAULT TRUE,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( address_id )
// );
//
export const UserAddress = db.define('user_address', {
    address_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_account_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    street_number: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    street_floor: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    apartment: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    phone_number: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    zip_code: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    ...createdUpdated,
}, {
    freezeTableName: true,
});
