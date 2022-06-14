import { DataTypes } from 'sequelize/types';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';


// CREATE TABLE IF NOT EXISTS db_restaurant.menu (
//     menu_id INT NOT NULL AUTO_INCREMENT,
//     name VARCHAR( 50 ) NULL,
//     description VARCHAR( 255 ) NULL,
//     menu_date DATE NOT NULL,
//     care_day_id INT NOT NULL,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( menu_id )
// );
//
export const Menu = db.define( 'menu', {
    menu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING( 50 ),
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING( 255 ),
        allowNull: true,
    },
    menu_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    care_day_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ...createdUpdated
}, {
    freezeTableName: true,
});
