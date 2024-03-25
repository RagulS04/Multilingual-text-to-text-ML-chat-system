import express from "express"
import dotenv from "dotenv"
<<<<<<< HEAD
import cors from "cors"

import authRoutes from "./routes/auth.Routes.js"
=======
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.Routes.js"
import messageRoutes from './routes/message.Routes.js'
import userRoutes from "../backend/routes/user.Routes.js";
>>>>>>> origin/selva
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

<<<<<<< HEAD
app.use(cors())

=======
>>>>>>> origin/selva
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
<<<<<<< HEAD

app.use("/api/auth", authRoutes);

/*app.get("/",(req,res) => {
    res.send("Hello world")
})*/

app.listen(PORT, () =>  {
connectToMongoDB();
console.log(`server is running on ${PORT}`)});
=======
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.listen(PORT, () => {
    connectToMongoDB(); //Connection to Database
    console.log(`Server is running on ${PORT}`)
});
>>>>>>> origin/selva
