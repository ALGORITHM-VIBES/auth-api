import express from 'express';
import authRoute from "./routes/auth";
import { homePageForward } from "./utility/forwardRequests";

/**
 * making express application
 */
const app = express();

/**
 * express app using json format
 */
app.use(express.json());

/**
 * Static views
 */
app.use(express.static("./src/www/public"));

/**
 * path: /
 * forwardTo: /index.html
 */

app.get("/", homePageForward);

/**
 * app routing
 */
app.use(authRoute); // auth route

export default app;