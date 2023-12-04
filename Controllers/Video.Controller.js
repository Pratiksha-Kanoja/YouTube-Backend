import VideoModal from "../Modals/Video.modal.js";

export const Addvideo =async(req,res) =>{
    try {
        const {title,channel_logo,view,duration,image,video,channel_name,subscriber} =req.body;
        if(!title || !channel_logo || !view || !duration || !image || !video || !channel_name || !subscriber) return res.status(404).json({success:false,message:"All mandetory"})

        const Video_Content = new VideoModal({
            title,channel_logo,view,duration,image,video,channel_name,subscriber
        })

        await Video_Content.save();

        return res.status(200).json({success:true,message:"Videos Added !!!"})

    } catch (error) {
        return res.status(500).json({success:false,message:"Videos not found"})
    }
}

export const getAllvideo = async(req,res) =>{
    try {
        const Video_Content= await VideoModal.find();
        if(Video_Content.length){
            return res.status(200).json({success:true,Video_Content:Video_Content})
        }
        return res.status(404).json({success:false,message:"Videos not found"})
    } catch (error) {
        return res.status(500).json({success:false,message:error})
    }
}

export const getSinglevideo = async (req,res) =>{
    try {
        const {id} = req.query;

        if(!id) return res.status(404).json({success:false,message:"ID id required"})

        const Video_content = await VideoModal.findById(id)

        if(Video_content){
            return res.status(200).json({success:true,Video_content:Video_content})
        }
    } catch (error) {
        return res.status(500).json({success:false,message:error})
    }
}
