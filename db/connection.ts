import { Sequelize } from 'sequelize';

export const db = new Sequelize( 'db_restaurant', 'root', '1234', {
    host: '192.168.1.201',
    port: 3306,
    dialect: 'mysql'
});
