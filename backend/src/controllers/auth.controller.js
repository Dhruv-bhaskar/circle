import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bycrypt from "bcryptjs";

export const signup = async (req, res)=>{
    const {fullName, email, password} = req.body;

    try{
        if(!fullName || !email || !password){
            return res.status(400).json({message: "All field are required"});
        }

        if(password.length < 6){
            return res.status(400).json({message: "Password must be at least 6 characters"});
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
I       }
        
        const user = await User.findOne({email});
        if(user) return res.status(404).json({message: "User already exists"});

        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);
        
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        });

        if(newUser){
            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic
            })
        }

    }catch(err){
        console.log("Error in sigup: ", err);
        res.status(500).json({message: "Internal Server Error"});
        
    }
};