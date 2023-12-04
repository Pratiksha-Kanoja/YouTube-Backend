import { Router } from "express";
import videorouter from "./Video.routes.js";
import authrouter from "./Auth.routes.js";

const router = Router();

router.use('/video',videorouter);
router.use('/auth',authrouter);

export default router;