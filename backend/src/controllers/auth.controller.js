import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import { ENV } from "../lib/env.js";
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
       }
        
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
            const savedUser = await newUser.save();
            generateToken(savedUser._id, res);

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic
            })

            try{
                await sendWelcomeEmail(savedUser.email, savedUser.fullName, ENV.CLIENT_URL);
            } catch (error) {
                console.error("Error sending welcome email:", error);
            }
        }

    }catch(err){
        console.log("Error in sigup: ", err);
        res.status(500).json({message: "Internal Server Error"});
        
    }
};

export const login = async (req, res)=>{
    const {email, password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message: 'Invalid Credentials'});

        const isPasswordCorrect = await bycrypt.compare(password, user.password);
        if(!isPasswordCorrect) return res.status(400).json({message: 'Invalid Credentials'});

        generateToken(user._id, res);

        res.status(200).json({
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                profilePic: user.profilePic
            })
    }catch(err){
        console.log("Error in login controller: ", err);
        res.status(500).json({message: "Internal Server Error"})
        
    }
}

export const logout = async (_, res)=>{
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({message: "Logged out successfully"});
}