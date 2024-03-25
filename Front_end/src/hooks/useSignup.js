import { useState } from 'react'
import toast from "react-hot-toast"
import { useAuthContext } from '../context/AuthContext'

const useSignup = () => {
    const [loading,setLoading] = useState(false)

    const {setAuthuser} = useAuthContext();

    const signup = async ({fullname,username,password,confirmpassword,gender,email}) => {

        setLoading(true)

        try {
            const res = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: {"Content-type":"application/json"},
                body: JSON.stringify({fullname,username,password,confirmpassword,email,gender})
            });

            const data = await res.json()
            console.log(data)

            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthuser(data)

        } catch (error) {
            toast.error(error.message)            
        }finally{
            setLoading(false)
        }
    }

    return {loading,signup}
}

export default useSignup;
