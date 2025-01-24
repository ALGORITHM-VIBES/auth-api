/**
 * @author DURGESH KUMAR SHARMA, RISHABH
 * @class AuthenticationServiceApplication
 */

import { Server } from "http";


/**
 * @class AuthenticationServiceApplication
 * @summary use to setup services of application and database
 */
export class AuthenticationServiceApplication {
    /**
     * @field
     * @typeof Server
     */
    private httpServer: Server;

    /**
     * @field
     * @typeof number
     */
    private PORT: number;

    /**
     * @field
     * @typeof string
     */
    private HOST: string = '127.0.0.1';

    /**
     * @constructor
     * @param _PORT 
     * @param _httpServer 
     * @returns void
     */

    constructor(PORT: number, httpServer: Server) {
        /**
         * @this
         * @description setting up httpServer, PORT
         */
        this.httpServer = httpServer;
        this.PORT = PORT;
    }

    /**
     * @function
     * @returns void
     * @description use to setup application services
     */
    init() {
         this.listen();
    };

    /**
     * @function
     * @returns void
     * @description listing to server
     */
    listen() {
        this.httpServer.listen(this.PORT, this.HOST, () => {
            console.info(`Auth Service Listining Over ${this.PORT}.\nurl: http://${this.HOST}:${this.PORT}`);
        });
    }
}