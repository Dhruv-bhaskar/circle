import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(ENV.MONGO_URI);
        console.log("Database connected: ", conn.connection.host);
    }catch(err){
        console.log("Error in db connection: ", err);
        process.exit(1); //1 for fail 0 for success.
        
    }
}