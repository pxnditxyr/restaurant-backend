import { DataTypes } from 'sequelize/types';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';

// CREATE TABLE IF NOT EXISTS db_restaurant.invoice (
//     invoice_id BIGINT NOT NULL AUTO_INCREMENT,
//     order_id INT NOT NULL,
//     restaurant_id INT NOT NULL,
//     invoice_authorization_data_id INT NOT NULL,
//     nit INT NOT NULL,
//     last_name VARCHAR( 255 ) NOT NULL,
//     invoice_date DATE NOT NULL,
//     total_amount DECIMAL( 10, 2 ) NOT NULL,
//     control_code VARCHAR( 255 ) NOT NULL,
//     state BOOLEAN NOT NULL DEFAULT TRUE,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( invoice_id )
// );
//
export const Invoice = db.define( 'invoice', {
    invoice_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    invoice_authorization_data_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nit: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    invoice_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    total_amount: {
        type: DataTypes.DECIMAL( 10, 2 ),
        allowNull: false,
    },
    control_code: {
        type: DataTypes.STRING,
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
