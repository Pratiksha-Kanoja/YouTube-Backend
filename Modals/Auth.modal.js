import mongoose, { Schema } from "mongoose";

const Authdata = new Schema({
    name:String,
    email:String,
    password:String
})
export default mongoose.model("Authdata",Authdata);