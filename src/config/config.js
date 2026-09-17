
import dotenv from 'dotenv'
dotenv.config();

if(!process.env.MONGODB_URI){
    throw new Error("MONGO_URI is not defined in environment variable");
}

if(!process.env.JWTSERECT_KEY){
    throw new Error ("JWTSERECT_KEY is not defined in environment variable")
}

const config = {
    MONGODB_URI: process.env.MONGODB_URI,
    JWTSERECT_KEY: process.env.JWTSERECT_KEY
}

export default config;