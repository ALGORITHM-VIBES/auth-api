import { Server } from "http";

export class AuthServiceApplication {
    private httpServer: Server;
    private PORT: number;
    private HOST: string = '127.0.0.1';

    constructor(_PORT: number, _httpServer: Server) {
        this.httpServer = _httpServer;
        this.PORT = _PORT ?? 5000;

        /**
         * Authservices initializing
         */
        this.init();
    }

    /**
     * Auth Services Initialization Function
     */
    init() {
         this.listen();
    };

    /**
     * http listen service
     */
    listen() {
        this.httpServer.listen(this.PORT, this.HOST, () => {
            console.info(`Auth Service Listining Over ${this.PORT}.\nurl: http://${this.HOST}:${this.PORT}`);
        });
    }
}
