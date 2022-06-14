import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';
// CREATE TABLE IF NOT EXISTS db_restaurant.credit_card (
//     credit_card_id INT NOT NULL AUTO_INCREMENT,
//     credit_card_number VARCHAR( 255 ) NOT NULL,
//     expiration_date DATE NOT NULL,
//     cvv INT NOT NULL,
//     customer BIGINT NOT NULL, -- user_account_id
//     state BOOLEAN NOT NULL DEFAULT TRUE,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( credit_card_id )
// );
//
//
export const CreditCard = db.define( 'credit_card', {
    credit_card_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    credit_card_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    expiration_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    cvv: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    customer: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    ...createdUpdated
})
