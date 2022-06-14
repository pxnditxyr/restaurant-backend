import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';


// CREATE TABLE IF NOT EXISTS db_restaurant.rating (
//     rating_id INT NOT NULL AUTO_INCREMENT,
//     restaurant_id INT NOT NULL,
//     customer BIGINT NOT NULL, -- user_account_id
//     title VARCHAR( 255 ) NOT NULL,
//     rating_comment VARCHAR( 255 ) NOT NULL,
//     rating_value INT NOT NULL,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( rating_id )
// );

export const Rating = db.define( 'rating', {

    rating_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    customer: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating_comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating_value: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ...createdUpdated
}, {
    freezeTableName: true,
});
