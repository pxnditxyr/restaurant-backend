import { DataTypes } from 'sequelize/types';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';

// CREATE TABLE IF NOT EXISTS db_restaurant.shopping_cart (
//     shopping_cart_id BIGINT NOT NULL AUTO_INCREMENT,
//     customer BIGINT NOT NULL, -- user_account_id
//     restaurant_id INT NOT NULL,
//     total_amount DECIMAL( 10, 2 ) NOT NULL,
//     shopping_cart_date DATE NOT NULL,
//     state BOOLEAN NOT NULL DEFAULT TRUE,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( shopping_cart_id )
// )
export const ShoppingCart = db.define( 'shopping_cart', {
    shopping_cart_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    customer: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_amount: {
        type: DataTypes.DECIMAL( 10, 2 ),
        allowNull: false,
    },
    shopping_cart_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    ...createdUpdated
}, {
    freezeTableName: true,
});
