
import express from "express"
import authRoute from '../src/routes/auth.route.js'
import morgan from "morgan";

const app = express()


// middleware
app.use(express.json());
app.use(morgan("dev"));


// 
app.use("/api/auth", authRoute);

export default app;