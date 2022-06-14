import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';

// CREATE TABLE IF NOT EXISTS db_restaurant.order (
//     order_id INT NOT NULL AUTO_INCREMENT,
//     cashier BIGINT NULL, -- user_account_id
//     customer BIGINT NOT NULL, -- user_account_id
//     restaurant_id INT NOT NULL,
//     order_date DATE NOT NULL,
//     delivered BOOLEAN NOT NULL,
//     table_id INT NOT NULL,
//     state BOOLEAN NOT NULL DEFAULT TRUE,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( order_id )
// );
//

export const Order = db.define( 'order', {

    order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cashier: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    customer: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    order_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    delivered: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    table_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    ...createdUpdated
}, {
    freezeTableName: true,
});
