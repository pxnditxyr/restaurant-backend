import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';
import { createdUpdated } from '../helpers/createdUpdated';


// CREATE TABLE IF NOT EXISTS db_restaurant.lookup_domain (
//     lookup_domain_id INT NOT NULL AUTO_INCREMENT,
//     domain_name VARCHAR( 50 ) NULL,
//     detail VARCHAR( 255 ) NOT NULL,
//     created_by BIGINT, -- user_account_id
//     created_at DATETIME,
//     updated_by BIGINT, -- user_account_id
//     updated_at DATETIME,
//     PRIMARY KEY( lookup_domain_id )
// );
//

export const Domain = db.define( 'lookup_domain', {
    lookup_domain_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    domain_name: {
        type: DataTypes.STRING( 50 ),
        allowNull: true
    },
    detail: {
        type: DataTypes.STRING,
        allowNull: false
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

// Domain.hasMany( Subdomain, {
//     foreignKey: 'domain_id',
//     as: 'fk_lookup_subdomain_domain',
//     onDelete: 'cascade',
//     onUpdate: 'cascade'
// });
