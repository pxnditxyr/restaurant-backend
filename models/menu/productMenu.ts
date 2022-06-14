import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';


// CREATE TABLE IF NOT EXISTS db_restaurant.product_menu (
//     product_menu_id INT NOT NULL AUTO_INCREMENT,
//     product_id INT NOT NULL,
//     menu_id INT NOT NULL,
//     product_menu_description VARCHAR( 255 ) NULL,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( product_menu_id )
// );

export const ProductMenu = db.define( 'product_menu', {
    product_menu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    menu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    product_menu_description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ...createdUpdated
}, {
    freezeTableName: true,
});
