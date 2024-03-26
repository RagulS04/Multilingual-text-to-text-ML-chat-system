import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.Routes.js"
import messageRoutes from './routes/message.Routes.js'
import userRoutes from "../backend/routes/user.Routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cors from "cors"

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors())

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow credentials
  
//     next();
//   });

dotenv.config();

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.listen(PORT, () => {
    connectToMongoDB(); //Connection to Database
    console.log(`Server is running on ${PORT}`)
});
