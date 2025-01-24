import { Router } from 'express';
import { authenticationFilterRequestMiddleware } from '../middleware/authenticationFilterRequestMiddleware';

const authenticationRoute: Router = Router();

authenticationRoute.post("/auth/login", authenticationFilterRequestMiddleware);

export = authenticationRoute;