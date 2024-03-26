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
        user: "selva152004@gmail.com",
        pass: "jfol rugw xbuh puwh",
    },
});


const sendMail = async (transporter, otp, receiverEmail) => {
    try {
        const mailOptions = {
            from: {
                name: "Multilingual Chat App",
                address: "selva152004@gmail.com",
            },
            to: receiverEmail,
            subject: "OTP - Signup verification",
            html: "<b>Your One Time Password for signing up into your account is below.Don't share with anyone</b> <h1 style='font-size:40px'><center>" + otp + "</center></h1>"
        }
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log(error)
    }
}

export const sendEmail = async (otp, receiverEmail) => {
    sendMail(transporter, otp, receiverEmail)
}

