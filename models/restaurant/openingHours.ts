import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';
// CREATE TABLE IF NOT EXISTS db_restaurant.opening_hours (
//     opening_hours_id INT NOT NULL AUTO_INCREMENT,
//     care_day_id INT NOT NULL,
//     opening_hours_description VARCHAR( 255 ) NULL,
//     start_time TIME NOT NULL,
//     end_time TIME NOT NULL,
//     start_break_time TIME NULL,
//     end_break_time TIME NULL,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( opening_hours_id )
// );
//
//
export const OpeningHours = db.define( 'opening_hours', {
    opening_hours_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    care_day_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    opening_hours_description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    start_break_time: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    end_break_time: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    ...createdUpdated
}, {
    freezeTableName: true,
});
