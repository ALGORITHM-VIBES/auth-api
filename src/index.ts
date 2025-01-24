import { config } from "dotenv";
import httpServer from "./www/httpServer";
import { AuthenticationServiceApplication } from "./AuthenticationServiceApplication";

/**
 * @description setting up environment variables
 */
config();

/**
 * @constant port
 * @typeof number
 */
const PORT: number = parseInt(process.env.PORT ?? `3000`);

/**
 * @instance AuthenticationServiceApplication
 */
const authenticationServiceApplication = new AuthenticationServiceApplication(
  PORT,
  httpServer
);

/**
 * @description initializing all services if authenticationServiceApplication
 */
authenticationServiceApplication.init();
