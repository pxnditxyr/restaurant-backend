import { DataTypes } from 'sequelize/types';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';

// CREATE TABLE IF NOT EXISTS db_restaurant.payment_method (
//     payment_method_id INT NOT NULL AUTO_INCREMENT,
//     credit_card_id INT NULL,
//     payment_method_description VARCHAR( 255 ) NOT NULL,
//     method INT NOT NULL, -- Domain !: 1: Cash 2: Credit Card 3: Debit Card 4: Check 5: Transfer 6: Paypal 7: Other
//     state BOOLEAN NOT NULL DEFAULT TRUE,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( payment_method_id )
// );
//
//

export const PaymentMethod = db.define( 'payment_method', {
    payment_method_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    credit_card_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    payment_method_description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    method: {
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
