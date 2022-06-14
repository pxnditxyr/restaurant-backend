import { DataTypes } from 'sequelize/types';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';
// CREATE TABLE IF NOT EXISTS db_restaurant.shopping_cart_product (
//     shopping_cart_item_id BIGINT NOT NULL AUTO_INCREMENT,
//     shopping_cart_id BIGINT NOT NULL,
//     product_id INT NOT NULL,
//     quantity INT NOT NULL,
//     state BOOLEAN NOT NULL DEFAULT TRUE,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( shopping_cart_item_id )
// )
export const ShoppingCartProduct = db.define( 'shopping_cart_product', {
    shopping_cart_item_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    shopping_cart_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
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
