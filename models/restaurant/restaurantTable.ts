import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';


// CREATE TABLE IF NOT EXISTS db_restaurant.restaurant_table (
//     restaurant_table_id INT NOT NULL AUTO_INCREMENT,
//     restaurant_id INT NOT NULL,
//     restaurant_table_description VARCHAR( 255 ) NOT NULL,
//     table_number INT NOT NULL,
//     number_chairs INT NOT NULL,
//     place INT NOT NULL, -- Domain !: Left Bottom 2: Left Top 3: Right Bottom 4: Right Top
//     state BOOLEAN NOT NULL DEFAULT TRUE,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( restaurant_table_id )
// );
//
export const RestaurantTable = db.define( 'restaurant_table', {
    restaurant_table_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    restaurant_table_description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    table_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    number_chairs: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    place: {
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
