import express from "express"
import path from "path";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.Routes.js"
import messageRoutes from './routes/message.Routes.js'
import userRoutes from "../backend/routes/user.Routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cors from "cors"
import { app, server } from "./socket/socket.js"

// const app = express();

const PORT = 5000;

app.use(cors())

dotenv.config();
const __dirname = path.resolve();
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use(express.static(path.join(__dirname, "/Front_end/build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "Front_end", "build", "index.html"));
});

server.listen(PORT, () => {
    connectToMongoDB(); //Connection to Database
    console.log(`Server is running on ${PORT}`)
});


//User Connected: zfhu-kpBokmRWU4IAAAB