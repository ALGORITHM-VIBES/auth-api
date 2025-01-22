import { Router } from 'express';
import { authRequestFilter } from '../middleware/authRequestFilter';

const router = Router();

router.post("/auth/login", authRequestFilter);

export default router;