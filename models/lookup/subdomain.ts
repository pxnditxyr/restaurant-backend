import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';

// CREATE TABLE IF NOT EXISTS db_restaurant.lookup_subdomain (
//     lookup_subdomain_id INT NOT NULL AUTO_INCREMENT,
//     subdomain_name VARCHAR( 50 ) NULL,
//     detail VARCHAR( 255 ) NOT NULL,
//     observation VARCHAR( 255 ) NULL,
//     lvl INT NOT NULL, -- domain_id
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( lookup_subdomain_id )
// );

export const Subdomain = db.define( 'lookup_subdomain', {
    lookup_subdomain_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    subdomain_name: {
        type: DataTypes.STRING( 50 ),
        allowNull: true
    },
    detail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    observation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lvl: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ...createdUpdated
}, {
    freezeTableName: true,
});

// ALTER TABLE db_restaurant.lookup_subdomain
//     ADD CONSTRAINT fk_lookup_subdomain_domain
//     FOREIGN KEY ( lvl )
//     REFERENCES db_restaurant.lookup_domain ( lookup_domain_id )
//     ON DELETE CASCADE
//     ON UPDATE CASCADE;
//
// Subdomain.belongsTo( Domain, {
//     foreignKey: 'lvl',
//     onDelete: 'CASCADE',
//     onUpdate: 'CASCADE'
// });
