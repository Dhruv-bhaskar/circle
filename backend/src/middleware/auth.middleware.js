import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

export const protectRoute = async (req,res,next)=>{
    try{
        const token = req.cookies.jwt;
        if(!token) return res.status(401).json({message: "Uauthorized - No Token"});

        const decode = jwt.verify(token, ENV.JWT_SECRET);
        if(!decode) return res.status(401).json({message: "Uauthorized - Token Invalid"});

        const user = await User.findById(decode.userId).select("-password");
        if(!user) return res.status(404).json({message: "User not found"});

        req.user = user;
        next();
    }catch(err){
        console.log("Error in middleware: ", err);
        res.status(500).json({message: "Internal Server Error"});
    }
}