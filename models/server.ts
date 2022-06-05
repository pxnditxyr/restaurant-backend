import express, { Application } from 'express'
import cors from 'cors';
import userRoutes from '../routes/users';
import { db } from '../db/connection';

export class Server {

    private app : Application;
    private port : string;
    private apiPaths = {
        user: '/api/users'
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
        this.app.use( this.apiPaths.user, userRoutes )
    }
    listen () {
        this.app.listen( this.port, () => {
            console.log( `Server running on port ${ this.port }` );
        });
    }


}
