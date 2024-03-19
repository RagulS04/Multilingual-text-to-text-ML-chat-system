import express from "express"
import { userDetailsValidation, emailVerificationValidation, signupValidation } from "../validation/auth.Validation.js";
import { userDetails, emailVerification, signup } from "../controllers/auth.controller.js";

const router = express.Router()

//Sign-up
router.post("/user-details", userDetailsValidation, userDetails);
router.post("/email-verification/:email", emailVerificationValidation, emailVerification)
router.post("/signup", signupValidation, signup)

//Login
router.post("/login")
export default router;