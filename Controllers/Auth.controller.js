import AuthModal from "../Modals/Auth.modal.js";
import bcrypt from 'bcrypt';
import Jwt from "jsonwebtoken";

export const Registeration = async(req,res) =>{
    try {
        const{name,email,password} = req.body.registerdata;

        if(!name || !email || !password) return res.status(401).json({success:false,message:"All fields are mandatory"})

        const hashedPassword = await bcrypt.hash(password,10);

        const Authdata = new AuthModal({
            name,
            email,
            password:hashedPassword
        })

        await Authdata.save();

        return res.status(200).json({success:true,message:"Register Successfully !!"});

    } catch (error) {
        return res.status(500).json({success:false,message:error});
    }
} 

export const Login = async (req, res) => {
    try{
        const{email,password}=req.body.registerdata;
        //console.log(req.body.registerdata,"Data here..........");

        if (!email || !password ) return res.status(401).json({ success: false, message: "All fields are mandtory." })

        const user = await AuthModal.findOne({ email: email });

        if(!user)return res.status(401).json({success: false, message: "Email is wrong."})

        const isPasswordcorrect = await bcrypt.compare(password,user.password);
        //console.log(isPasswordcorrect,"check here")

        if(!isPasswordcorrect){
            return res.status(401).json({success:false,message:"Password is wrong"})
        }

        const token = await Jwt.sign({id : user._id},process.env.JWT_SECRET)

        return res.status(200).json({success: true,message:"Login Successfull",user : {name : user.name,id:user._id},token})

    }catch(error){
        return res.status(500).json({success: false , message: error })
    }
}

export const getCurrentUser = async (req, res) => {
    try{
        const { token } = req.body;
        if(!token) return res.status(401).json({success:false,message:"Token is required."})

        const {id} = await Jwt.verify(token,process.env.JWT_SECRET)

        const user = await AuthModal.findById(id);

        if(!user) return res.status(401).json({success:false,message:"User not found."})

        return res.status(200).json({success:true , user:{name:user.name,id:user._id}})

    }catch(error){
        return res.status(500).json({success:false , message: error })
    }
}