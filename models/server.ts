import express, { Application } from 'express'
import cors from 'cors';
// import userRoutes from '../routes/users';
import adminRoutes from '../routes/users/admins';
import bossRoutes from '../routes/users/bosses';
import cashierRoutes from '../routes/users/cashier';
import { db } from '../db/connection';

export class Server {
    private app : Application;
    private port : string;
    private apiPaths = {
        admin: '/api/users/admins',
        boss: '/api/users/boss',
        cashier: '/api/users/cashier',
    }


    constructor () {
        this.app = express();
        this.port = process.env.PORT || '4000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    middlewares () {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static( 'public' ) );
    }
    async dbConnection () {
        try {
            await db.authenticate();
            console.log( 'Connection to the database has been established successfully.' );
        }
        catch ( error : any ) {
            throw new Error( error );
        }
    }
    routes () {
        this.app.use( this.apiPaths.admin, adminRoutes )
        this.app.use( this.apiPaths.boss, bossRoutes )
        this.app.use( this.apiPaths.cashier, cashierRoutes )
    }
    listen () {
        this.app.listen( this.port, () => {
            console.log( `Server running on port ${ this.port }` );
        });
    }
}
