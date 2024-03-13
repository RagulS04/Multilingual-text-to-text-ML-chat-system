import bcrypt from "bcryptjs"
import User from "../models/user.model.js"

export const signup = async(req,res) => {
    try{
        const {fullname,username,password,confirmpassword,gender} = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt);

        if(password != confirmpassword){
            return res.status(400).json({error:"Password don't match"})
        }

        const user = await User.findOne({username})

        if(user){
            return res.status(400).json({error:"Username already exists"})
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        
        const newUser = new User({
            fullname,
            username,
            password: hashedpassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            await newUser.save()

            res.status(201).json({
                _id:newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic:newUser.profilePic
            })
        }else{
            res.status(400).json({error: "Invalid user data"});
        }
        
        
    } catch (error){
        console.log("error in signup",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}