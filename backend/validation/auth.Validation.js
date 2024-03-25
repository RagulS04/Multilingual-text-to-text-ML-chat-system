import Joi from "joi";

const userDetailsSchema = Joi.object({
    fullname: Joi.string().required().messages({
        'string.empty': 'Fullname cannot be empty',
        'any.required': 'Fullname is required'
    }),
    email: Joi.string().email().required().messages({
        'string.empty': 'Email cannot be empty',
        'string.email': 'Email should be in a valid email format',
        'any.required': 'Email is required'
    }),
    mobile: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
        'string.pattern.base': 'Mobile number must be of 10 digits',
        'string.empty': 'Mobile number is required',
        'any.required': 'Mobile is required'
    }),
    gender: Joi.string().valid("male", "female").required().messages({
        'string.empty': 'Gender cannot be empty',
        'any.only': 'Invalid gender specified',
        'any.required': 'Gender is required'
    })
})
const emailVerificationSchema = Joi.object({
    otp: Joi.string().pattern(/^[0-9]{6}$/).required().messages({
        'string.pattern.base': 'OTP must be of 6 digits',
        'string.empty': 'OTP cannot be empty',
        'any.required': 'OTP is required'
    })
})
const signupSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'Email cannot be empty',
        'string.email': 'Email should be in a valid email format',
        'any.required': 'Email is required'
    }),
    password: Joi.string().min(8).max(16).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/).required().messages({
        'string.empty': 'Password cannot be empty',
        'any.required': 'Password is required',
        'string.min': 'Password must be at least 8 characters long.',
        'string.max': 'Password must be at most 16 characters long.',
        'string.pattern.base': 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.'
    }),
    confirmPassword: Joi.string().min(8).max(16).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/).required().messages({
        'string.empty': 'Confirm Password cannot be empty',
        'any.required': 'Confirm Password is required',
        'string.min': 'Confirm Password must be at least 8 characters long.',
        'string.max': 'Confirm Password must be at most 16 characters long.',
        'string.pattern.base': 'Confirm Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.'
    })
})
const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'Email cannot be empty',
        'string.email': 'Email should be in a valid email format',
        'any.required': 'Email is required'
    }),
    password: Joi.string().min(8).max(16).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/).required().messages({
        'string.empty': 'Password cannot be empty',
        'any.required': 'Password is required',
        'string.min': 'Password must be at least 8 characters long.',
        'string.max': 'Password must be at most 16 characters long.',
        'string.pattern.base': 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.'
    })
})
const resendOtpSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'Email cannot be empty',
        'string.email': 'Email should be in a valid email format',
        'any.required': 'Email is required'
    })
})
export const userDetailsValidation = async (req, res, next) => {
    const { error } = userDetailsSchema.validate(req.body);
    if (error) {
        return res.status(500).json({ message: error.details[0].message })
    }
    next();
}
export const emailVerificationValidation = async (req, res, next) => {
    const { error } = emailVerificationSchema.validate(req.body);
    if (error) {
        return res.status(500).json({ message: error.details[0].message })
    }
    next();
}
export const signupValidation = async (req, res, next) => {
    const { error } = signupSchema.validate(req.body);
    if (error) {
        return res.status(500).json({ message: error.details[0].message })
    }
    next();
}
export const loginValidation = async (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(500).json({ message: error.details[0].message })
    }
    next();
}
export const resendOtpValidation = async (req, res, next) => {
    const { error } = resendOtpSchema.validate(req.body);
    if (error) {
        return res.status(500).json({ message: error.details[0].message })
    }
    next();
}