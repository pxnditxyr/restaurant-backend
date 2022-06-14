import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';

// CREATE TABLE IF NOT EXISTS db_restaurant.people (
//     people_id BIGINT NOT NULL AUTO_INCREMENT,
//     first_name VARCHAR( 50 ) NOT NULL,
//     last_name VARCHAR( 50 ) NOT NULL,
//     dni INT NOT NULL UNIQUE,
//     birthday DATE NOT NULL,
//     phone INT NOT NULL,
//     verified_phone BOOLEAN NOT NULL DEFAULT FALSE,
//     gender INT, -- Domain 1: Male 2: Female 3: ...
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( people_id )
// );
//
export const People = db.define( 'people', {
    people_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    verified_phone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    gender: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ...createdUpdated
});

    // File: db_normal_relation.sql

    // ALTER TABLE db_restaurant.user_account
    //     ADD CONSTRAINT fk_user_account_people
    //     FOREIGN KEY ( people_id )
    //     REFERENCES db_restaurant.people ( people_id )
    //     ON DELETE CASCADE
    //     ON UPDATE CASCADE;
    //
    //

    // File: db_relations_subdomain_create_update_by.sql

    // ALTER TABLE db_restaurant.people
    //     ADD CONSTRAINT fk_gender_subdomain
    //     FOREIGN KEY ( gender )
    //     REFERENCES db_restaurant.lookup_subdomain ( lookup_subdomain_id )
    //     ON DELETE CASCADE
    //     ON UPDATE CASCADE;

    // ALTER TABLE db_restaurant.people
    //     ADD CONSTRAINT fk_people_created_by_user_account
    //     FOREIGN KEY ( created_by )
    //     REFERENCES db_restaurant.user_account ( user_account_id )
    //     ON DELETE CASCADE
    //     ON UPDATE CASCADE;
    //
    // ALTER TABLE db_restaurant.people
    //     ADD CONSTRAINT fk_people_updated_by_user_account
    //     FOREIGN KEY ( updated_by )
    //     REFERENCES db_restaurant.user_account ( user_account_id )
    //     ON DELETE CASCADE
    //     ON UPDATE CASCADE;
    //

