import { DataTypes } from 'sequelize/types';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';

//
// CREATE TABLE IF NOT EXISTS db_restaurant.order_detail (
//     order_detail_id INT NOT NULL AUTO_INCREMENT,
//     order_id INT NOT NULL,
//     product_id INT NOT NULL,
//     quantity INT NOT NULL,
//     unit_price DECIMAL( 10, 2 ) NOT NULL,
//     state BOOLEAN NOT NULL DEFAULT TRUE,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( order_detail_id )
// );
//
export const OrderDetail = db.define( 'order_detail', {
    order_detail_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    order_id: {
        type: DataTypes.INTEGER,
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
    unit_price: {
        type: DataTypes.DECIMAL( 10, 2 ),
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
