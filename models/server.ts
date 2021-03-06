import express, { Application } from 'express'

export class Server {

    private app : Application;
    private port : string;

    constructor (  ) {
        this.app = express();
        this.port = process.env.PORT || '4000';
        
    }

    listen () {
        this.app.listen( this.port, () => {
            console.log( `Server running on port ${ this.port }` );
        });
    }
}
