import nodemailer from "nodemailer";
import dotenv from "dotenv"
import ejs from "ejs"
import express from "express"
dotenv.config();
const app = express()
app.set('view engine', 'ejs');

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
    },
});


const sendMail = async (transporter, otp, receiverEmail) => {
    try {
        const mailOptions = {
            from: {
                name: "Multilingual Chat App",
                address: process.env.USER
            },
            to: receiverEmail,
            subject: "OTP for signing up Multilingual Chat Application",
            text: "OTP for signing up into your account is " + otp + ". Don't share with anyone"
        }
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log(error)
    }
}

export const sendEmail = async (otp, receiverEmail) => {
    sendMail(transporter, otp, receiverEmail)
}

