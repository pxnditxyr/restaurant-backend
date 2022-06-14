import { DataTypes } from 'sequelize/types';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';


// CREATE TABLE IF NOT EXISTS db_restaurant.care_day (
//     care_day_id INT NOT NULL AUTO_INCREMENT,
//     restaurant_id INT NOT NULL,
//     care_day_name VARCHAR( 50 ) NOT NULL,
//     care_day_description VARCHAR( 255 ) NULL,
//     abbreviation VARCHAR( 4 ) NOT NULL,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( care_day_id )
// );
//


//
export const CareDay = db.define( 'care_day', {
    care_day_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    care_day_name: {
        type: DataTypes.STRING( 50 ),
        allowNull: false
    },
    care_day_description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    abbreviation: {
        type: DataTypes.STRING( 4 ),
        allowNull: false
    },
    ...createdUpdated
}, {
    freezeTableName: true,
});
