import { Router } from "express";
import { Login, Registeration, getCurrentUser } from "../Controllers/Auth.controller.js";

const authrouter = Router();

authrouter.post('/register',Registeration);
authrouter.post('/login',Login);
authrouter.post('/get-current-user',getCurrentUser);

export default authrouter;