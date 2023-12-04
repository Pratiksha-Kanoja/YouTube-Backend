import AuthModal from "../Modals/Auth.modal.js";

export const Registeration = async(req,res) =>{
    try {
        const{name,email,password} = req.body.registerdata;

        console.log(req.body);
        if(!name || !email || !password) return res.status(401).json({success:false,message:"All fields are mandatory"})

        const Authdata = new AuthModal({
            name,email,password
        })

        await Authdata.save();

        return res.status(200).json({success:true,message:"Data Added"});

    } catch (error) {
        return res.status(500).json({success:false,message:error});
    }
}