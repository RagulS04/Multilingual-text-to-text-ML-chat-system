import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        //const token = req.cookies['jwt'];
        const token = req.headers['authorization'];
        console.log(token)
        if (!token) {
            return res.status(400).json({ error: "Unauthorized - no Token provided" })
        }

        const decoded = jwt.verify(token,`IagbZ4Tj91VGsU+PuCbRbb/3iMbAuxS/FVGB7QlP7ok=` )
        console.log(decoded)
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" })
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "User not Found" })
        }

        console.log(user)
        req.user = user

        next();
    } catch (error) {
        console.log("Error in protectRoute middleware ", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}
