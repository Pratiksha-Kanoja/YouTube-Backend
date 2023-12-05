import { Router } from "express";
import { Login, Registeration } from "../Controllers/Auth.controller.js";

const authrouter = Router();

authrouter.post('/register',Registeration);
authrouter.post('/login',Login);

export default authrouter;