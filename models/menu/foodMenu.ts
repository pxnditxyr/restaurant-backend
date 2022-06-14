import { DataTypes } from 'sequelize/types';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';


// CREATE TABLE IF NOT EXISTS db_restaurant.food_menu (
//     food_menu_id INT NOT NULL AUTO_INCREMENT,
//     food_id INT NOT NULL,
//     menu_id INT NOT NULL,
//     food_menu_description VARCHAR( 255 ) NULL,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( food_menu_id )
// );

export const FoodMenu = db.define( 'food_menu', {
    food_menu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    food_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    menu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    food_menu_description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ...createdUpdated
}, {
    freezeTableName: true,
});
