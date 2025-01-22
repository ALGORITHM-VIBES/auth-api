import { config } from "dotenv";
import httpServer from "./www/httpServer";
import { AuthServiceApplication } from "./AuthServiceApp";

/**
 * add environment variables
 */
config();

/**
 * setting for env variables
 */
const PORT: number = parseInt(process.env.PORT ?? `3000`);

/**
 * Instance of AuthServiceApplication
 */
const authServiceApplication = new AuthServiceApplication(PORT, httpServer);
