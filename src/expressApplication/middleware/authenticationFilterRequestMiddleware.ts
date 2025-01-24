import { Request, Response, NextFunction } from "express";
import { AuthenticationRequestBody } from "../../entity/AuthenticationRequestBody";

/**
 * @function
 * @param req 
 * @param res 
 * @param next 
 * @returns void
 */
export function authenticationFilterRequestMiddleware(req: Request, res: Response, next: NextFunction) {
    const requestBody: AuthenticationRequestBody = req.body;
    console.log(requestBody);
}