import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    mobile: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"],
    },
    profilePic: {
        type: String,
        default: "",
    },
    verified: {
        type: Boolean,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

export default User;