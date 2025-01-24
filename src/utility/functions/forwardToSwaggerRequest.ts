import { Request, Response, NextFunction } from "express";

/**
 * @function
 * @param req
 * @param res 
 * @param next
 * @returns void
 */
export function forwardToSwaggerRequest(req: Request, res: Response, next: NextFunction) {
      const _redirectTo: string = "index.html";
      res.redirect(_redirectTo);
      next();
}