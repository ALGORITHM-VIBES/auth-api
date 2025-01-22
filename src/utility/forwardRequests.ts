import { Request, Response, NextFunction } from "express";

export function homePageForward(req: Request, res: Response, next: NextFunction) {
      const _redirectTo: string = "index.html";
      res.redirect(_redirectTo);
      next();
}