import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.Routes.js'; 
import connectToMongoDB from './db/connectTOmongoDb.js';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use("/api/auth",authRoutes)

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`)
})