import { Router } from 'express';

const router = Router();

router.get("/home", (req, res) => {
    res.send("Welcome to /home");
});

export default router;