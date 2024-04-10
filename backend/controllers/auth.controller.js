import bcrypt from "bcryptjs"
import User from "../models/user.model.js"
import { sendEmail } from "../utils/sendEmail.js";
import { generateToken } from "../utils/generateTokens.js";
import jwt from "jsonwebtoken"

export const userDetails = async (req, res) => {
    try {
        const { fullname, email, mobile, gender } = req.body;
        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ error: "User already exists" })
        }

        const OTP = Math.floor(100000 + Math.random() * 900000);
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${email}`;

        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${email}`;

        const newUser = new User({
            fullname,
            email,
            password: OTP,
            mobile,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
            verified: false
        })

        sendEmail(OTP, email);

        if (newUser) {
            await newUser.save()
            res.status(200).json({ message: "OTP has been sent to your email", data: email })
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }

    } catch (error) {
        console.log("error in signup", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}


export const emailVerification = async (req, res) => {
    try {
        const { email } = req.params
        const { otp } = req.body

        const emailEntry = await User.findOne({ email })

        //if (!emailEntry) return res.status(404).json({ message: "User not Found" });
        if (emailEntry.password === otp) {
            await User.updateOne({ email: email }, { verified: true, password: "" })
            res.status(200).json({ message: "OTP verified successfully", data: email })
        }
        else {
            res.status(400).json({ message: "Invalid OTP. Try Again" })
        }

    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}

export const signup = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        if (password != confirmPassword) {
            return res.status(400).json({ error: "Password don't match" })
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        else if (user.verified === false) {
            return res.status(404).json({ message: "User not Verified" })
        }

        else if (user.password !== "") {
            return res.status(404).json({ message: "User already registered" })
        }
        const update = await User.findOneAndUpdate({ email: email, verified: true, password: "" }, { password: hashedPassword });
        
        const userId = user._id
        // generateToken(user._id, res)
        const token = jwt.sign({userId}, process.env.JWT_SECRET    )
        return res.status(200).json({ message: "User registered Successfully"  , data: { _id: user._id, fullname: user.fullname, profilePic: user.profilePic},token: token})
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}

export const resendOTP = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user)
            return res.status(404).json({ message: "User not found" })
        else if (user.verified)
            return res.status(300).json({ message: "User already verified" })

        sendEmail(user.password, email);
        res.status(200).json({ message: "OTP has been resent" })
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User doesn't exists" })
        }
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        // generateToken(user._id, res)
        const userId = user._id
        const token = jwt.sign({userId}, process.env.JWT_SECRET    )
        res.status(200).json({ message: `Login successful`, data: { _id: user._id, fullname: user.fullname, profilePic: user.profilePic},token: token })

    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}

// export const logout = async (req, res) => {
//     try {
//         localStorage.removeItem("token");
//         res.status(200).json({ message: "Logged out successfully" })
//     } catch (error) {
//         res.status(500).json({ error: "Internal server error" })
//     }
// }