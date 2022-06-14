import { DataTypes } from 'sequelize/types';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';


// CREATE TABLE IF NOT EXISTS db_restaurant.drink (
//     drink_id INT NOT NULL AUTO_INCREMENT,
//     product_id INT NOT NULL,
//     size_drink VARCHAR( 255 ) NULL,
//     brand VARCHAR( 255 ) NULL,
//     flavor INT NOT NULL, -- domain
//     carbonated BOOLEAN NOT NULL,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( drink_id )
// );


export const Drink = db.define( 'drink', {
    drink_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    size_drink: {
        type: DataTypes.STRING,
        allowNull: true
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: true
    },
    flavor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    carbonated: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    ...createdUpdated
}, {
    freezeTableName: true,
});
