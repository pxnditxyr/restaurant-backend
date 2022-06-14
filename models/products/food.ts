import { DataTypes } from 'sequelize/types';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';


// CREATE TABLE IF NOT EXISTS db_restaurant.food (
//     food_id INT NOT NULL AUTO_INCREMENT,
//     product_id INT NOT NULL,
//     ingredients VARCHAR( 255 ) NULL,
//     food_type INT NOT NULL, -- domain - 1: soup, 2: salad, 3: main dish, 4: dessert
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( food_id )
// );


export const Food = db.define( 'food', {
    food_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ingredients: {
        type: DataTypes.STRING,
        allowNull: true
    },
    food_type: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ...createdUpdated
}, {
    freezeTableName: true,
});
