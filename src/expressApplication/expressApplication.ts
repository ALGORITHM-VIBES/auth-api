import express from "express";
import { forwardToSwaggerRequest } from "../utility/functions/forwardToSwaggerRequest";
import authenticationRoute from "./routes/authenticationRoute";

/**
 * @constant
 * @description use to create express app
 */
const expressApplication = express();

/**
 * @description enabling json to our express application
 */
expressApplication.use(express.json());

/**
 * @description setting up public folder
 */
expressApplication.use(express.static("./src/www/public"));

/**
 * @description forwarding request to swagger page
 */
expressApplication.get("/", forwardToSwaggerRequest);

/**
 * @description adding up authentication route
 */
expressApplication.use("/auth", authenticationRoute);

/**
 * @exports 
 * @constant expressApplication
 */
export = expressApplication;
