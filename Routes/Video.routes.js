import { Router } from "express";
import { Addvideo, getAllvideo, getSinglevideo } from "../Controllers/Video.Controller.js";

const videorouter= Router();

videorouter.post('/add-video',Addvideo)
videorouter.get('/get-all-video',getAllvideo)
videorouter.get('/get-single-video',getSinglevideo)

export default videorouter;