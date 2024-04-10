import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.Routes.js"
import messageRoutes from './routes/message.Routes.js'
import userRoutes from "../backend/routes/user.Routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cors from "cors"
import { app, server } from "./socket/socket.js"

// const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors())

dotenv.config();

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
server.listen(PORT, () => {
    connectToMongoDB(); //Connection to Database
    console.log(`Server is running on ${PORT}`)
});


//User Connected: zfhu-kpBokmRWU4IAAAB