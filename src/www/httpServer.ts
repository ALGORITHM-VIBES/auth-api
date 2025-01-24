import expressApplication from "../expressApplication/expressApplication";
import { createServer } from "http";

/**
 * @constant
 * @description respossible creating expressApplication to httpServer
 */
const httpServer = createServer(expressApplication);

/**
 * @exports
 * @constant createServer
 */
export = httpServer;