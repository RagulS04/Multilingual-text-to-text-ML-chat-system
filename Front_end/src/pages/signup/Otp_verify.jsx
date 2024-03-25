import React, { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useSignup from '../../hooks/useSignup';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import api from "../../api/otp"


const Otp_verify = () => {

  const {inputs,setInputs} = useAuthContext();
  const [otp,setOtp] = useState("");
  const [verified,setVerified] = useState(false)

  const {loading,signup} = useSignup()

  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log("handlesubmit")

    console.log(inputs)
    // const res = checkError(otp,inputs.confirmpassword,inputs.password)

    // await signup(inputs);

  }

  const VerifyOTP = (e)=>{
    e.preventDefault();

    console.log("otp")

    // const res = checkError(otp,inputs.confirmpassword,inputs.password)

    // if(!res)  return
    

    // const response = api.post("",{
    //     attribute: otp
    // })//url for otp verify
    console.log(inputs)
    setVerified(true)

  }
  
  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='p-2 text-xl font-mono font-extrabold'>OTP Verification</h1>

        <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <label className='mb-1  font-extrabold'>Enter OTP</label>
                <input className='rounded-lg py-1 mx-1 px-4 mb-3 input input-primary' placeholder='Enter OTP'
                 value={otp}
                 onChange={(e)=>{setOtp(e.target.value)}}
                ></input>

                <Link>Resend OTP</Link>

                {!verified && <button onClick={VerifyOTP} >Verify</button>}

               { verified && (
                <>
                    <label className='mb-1 font-extrabold'>Password</label>
                    <input className='rounded-lg py-1 mx-1 px-4 mb-3 input input-primary'  placeholder='Enter password'
                    value={inputs.password}
                    onChange={(e)=>{setInputs({...inputs, password:e.target.value})}}></input>
            
                    <label className='mb-1 font-extrabold'>Confirm password</label>
                    <input className='rounded-lg py-1 mx-1 px-4 mb-3 input input-primary' placeholder='Enter password'
                    value={inputs.confirmpassword}
                    onChange={(e)=>{setInputs({...inputs, confirmpassword:e.target.value})}}
                    ></input>
                </>
               )}
            </div>

            <div>
                <button className='bg-white text-black px-3 py-2 m-3 w-full rounded-full bordered hover:bg-black hover:text-white font-extrabold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...' >Verify and Continue</button>
            </div>
        </form>
    </div>
  )
}

export default Otp_verify

function checkError(confirmpassword,password){
    if(!password || !confirmpassword){
        toast.error("Enter all fields")
        return false;
    }

    if(password !== confirmpassword){
        toast.error("password doesn't match")
        return false;
    }

    return true;
}