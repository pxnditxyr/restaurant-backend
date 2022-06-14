import { DataTypes, ModelDefined, Optional } from 'sequelize';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';


// interface UserAccountAttributes {
//     user_account_id: number;
//     people_id: number;
//     user_role: number;
//     username: string;
//     email: string;
//     passwd: string;
//     verified_email: boolean;
//     state: boolean;
//     created_by: number;
//     created_at: Date;
//     updated_by: number;
//     updated_at: Date;
// };
//
// // type UserAccountCreationAttributes = Optional<UserAccountAttributes, 'user' | 'title'>
// type UserAccountCreationAttributes = Optional<UserAccountAttributes, 'user_account_id' | 'people_id'>;

export const UserAccount = db.define( 'user_account', {
    // CREATE TABLE IF NOT EXISTS db_restaurant.user_account (
    // user_account_id BIGINT NOT NULL AUTO_INCREMENT,
    // people_id BIGINT NOT NULL,
    // user_role INT NOT NULL, -- Domain 1: admin, 2: waiter, 3: chef, 4: cashier lookup
    // username VARCHAR( 50 ) NOT NULL UNIQUE,
    // email VARCHAR( 255 ) NOT NULL UNIQUE,
    // passwd VARCHAR( 255 ) NOT NULL,
    // verified_email BOOLEAN NOT NULL DEFAULT FALSE,
    // state BOOLEAN NOT NULL DEFAULT TRUE,
    // created_by BIGINT, -- user_account_id
    // created_at DATETIME,
    // updated_by BIGINT, -- user_account_id
    // updated_at DATETIME,
    // PRIMARY KEY( user_account_id )
    //
    user_account_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    people_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    user_role: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    passwd: {
        type: DataTypes.STRING,
        allowNull: false
    },
    verified_email: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
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


