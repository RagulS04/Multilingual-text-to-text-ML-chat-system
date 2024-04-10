import { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
// import useSignup from '../../hooks/useSignup';
import toast from 'react-hot-toast';
import usePassword from '../../hooks/usePassword';


const Otp_verify = () => {
  
  const {inputs,setInputs} = useAuthContext();
  const [otp,setOtp] = useState("");
  const [verified,setVerified] = useState(false)
  const {setpass} = usePassword()

  // const {loading,signup} = useSignup()

  const handleSubmit = async(e) =>{
    e.preventDefault();


    await setpass(inputs)
  }

  const VerifyOTP = async (e)=>{
    e.preventDefault();

    const mail = inputs.email;

    
    try {
      const res = await fetch(`http://localhost:5000/api/auth/email-verification/${mail}`,{
      method:"POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify({otp})
    });

    const data = await res.json()

    if(res.status === 400){
      console.log("error")
      setVerified(false)
        throw new Error(data.message)
    }
    
      setVerified(true)

    } catch (error) {
      toast.error(error.message)
    }

  }

  const resendOTP = async (e) => {
    e.preventDefault();

    try{
      const email = inputs.email;

      const res = await fetch(`http://localhost:5000/api/auth/resend-otp`,{
        method:"POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({email})
      })

      const data = await res.json()

      toast.success("Signup successful")

      if(res.status === 404 || res.status===300){
        throw new Error(data.message)
      }
    } catch (error){
      toast.error(error.message)
    }


  }
  
  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='p-2 text-xl font-mono font-extrabold'>OTP Verification</h1>

        <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
            {!verified && <><label className='mb-1  font-extrabold'>Enter OTP</label>
                <input className='rounded-lg py-1 mx-1 px-4 mb-3 input input-primary' placeholder='Enter OTP'
                 value={otp}
                 onChange={(e)=>{setOtp(e.target.value)}}
                ></input>
                
                <button onClick={resendOTP} >Resend Otp</button>

                {!verified && <button onClick={VerifyOTP} >Verify</button>}

                </>
            }

               { verified && (
                <>
                    <label className='mb-1 font-extrabold'>Password</label>
                    <input type = "password" className='rounded-lg py-1 mx-1 px-4 mb-3 input input-primary'  placeholder='Enter password'
                    value={inputs.password}
                    onChange={(e)=>{setInputs({...inputs, password:e.target.value})}}></input>
            
                    <label className='mb-1 font-extrabold'>Confirm password</label>
                    <input type = "password" className='rounded-lg py-1 mx-1 px-4 mb-3 input input-primary' placeholder='Enter password'
                    value={inputs.confirmPassword}
                    onChange={(e)=>{setInputs({...inputs, confirmPassword:e.target.value})}}
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

// function checkError(confirmpassword,password){
//     if(!password || !confirmpassword){
//         toast.error("Enter all fields")
//         return false;
//     }

//     if(password !== confirmpassword){
//         toast.error("password doesn't match")
//         return false;
//     }

//     return true;
//}