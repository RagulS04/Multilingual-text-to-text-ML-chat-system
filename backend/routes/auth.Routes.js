import express from "express"
import { userDetailsValidation, emailVerificationValidation, signupValidation, loginValidation, resendOtpValidation } from "../validation/auth.Validation.js";
import { userDetails, emailVerification, signup, resendOTP, login, logout } from "../controllers/auth.controller.js";

const router = express.Router()

//Sign-up
router.post("/user-details", userDetailsValidation, userDetails);
router.post("/email-verification/:email", emailVerificationValidation, emailVerification)
router.post("/signup", signupValidation, signup)
router.post("/resend-otp", resendOtpValidation, resendOTP)

//Login
router.post("/login", loginValidation, login)

//Logout
router.post('/logout', logout)

export default router;