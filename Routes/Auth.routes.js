import { Router } from "express";
import { Registeration } from "../Controllers/Auth.controller.js";

const authrouter = Router();

authrouter.post('/register',Registeration);

export default authrouter;