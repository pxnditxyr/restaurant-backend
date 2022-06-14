import { DataTypes } from 'sequelize/types';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';

// CREATE TABLE IF NOT EXISTS db_restaurant.product (
//     product_id INT NOT NULL AUTO_INCREMENT,
//     product_name VARCHAR( 50 ) NOT NULL,
//     product_description VARCHAR( 255 ) NOT NULL,
//     price DECIMAL( 10, 2 ) NOT NULL,
//     stock INT NOT NULL,
//     product_category INT NOT NULL, -- domain - 1: food, 2: drink
//     state BOOLEAN NOT NULL DEFAULT TRUE,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( product_id )
// )

export const Product = db.define( 'Product', {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING( 50 ),
        allowNull: false
    },
    product_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL( 10, 2 ),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_category: {
        type: DataTypes.INTEGER,
        allowNull: false
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
