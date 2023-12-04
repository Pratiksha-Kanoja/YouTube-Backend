import mongoose, { Schema } from "mongoose";

const Video_Content = new Schema({
    title:String,
    channel_logo:String,
    view:String,
    duration:String,
    image:String,
    video:String,
    channel_name:String,
    subscriber:String
})

export default mongoose.model("Video_Content",Video_Content)