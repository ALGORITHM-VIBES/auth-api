import app from "../expressApp";
import { createServer } from "http";

/**
 * creating Http Server with Express App
 */
const httpServer = createServer(app);

// /**
//  * http server hosting & listening
//  */
// httpServer.listen(PORT, "127.0.0.1", () => {
//     console.log(`AUTH_SERVICE running at http://127.0.0.1:${PORT}`);
// });

export default httpServer;