import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';
// CREATE TABLE IF NOT EXISTS db_restaurant.payment (
//     payment_id INT NOT NULL AUTO_INCREMENT,
//     invoice_id BIGINT NOT NULL,
//     payment_method_id INT NOT NULL,
//     payment_date DATE NOT NULL,
//     payment_amount DECIMAL( 10, 2 ) NOT NULL,
//     state BOOLEAN NOT NULL DEFAULT TRUE,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( payment_id )
// );
//
//
export const Payment = db.define( 'payment', {
    payment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    invoice_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    payment_method_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    payment_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    payment_amount: {
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
