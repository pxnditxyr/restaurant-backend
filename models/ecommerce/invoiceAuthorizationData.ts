import { DataTypes } from 'sequelize/types';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';

// CREATE TABLE IF NOT EXISTS db_restaurant.invoice_authorization_data (
//     invoice_authorization_data_id INT NOT NULL AUTO_INCREMENT,
//     auth_number VARCHAR( 255 ) NOT NULL,
//     dosification_key VARCHAR( 255 ) NOT NULL,
//     state BOOLEAN NOT NULL DEFAULT TRUE,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( invoice_authorization_data_id )
// );
//
export const InvoiceAuthorizationData = db.define( 'invoice_authorization_data', {
    invoice_authorization_data_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    auth_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dosification_key: {
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
