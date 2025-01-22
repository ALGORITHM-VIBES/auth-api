import { Request, Response, NextFunction } from "express";
import AuthRequestBody from "../utility/entity/AuthRequestBody";

export function authRequestFilter(req: Request, res: Response, next: NextFunction) {
    const requestBody: AuthRequestBody = req.body;
    console.log(requestBody);
}