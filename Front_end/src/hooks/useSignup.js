import { useState } from 'react'
import toast from "react-hot-toast"
import { useNavigate} from 'react-router-dom';
const useSignup = () => {
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate();

    const signup = async ({fullname,mobile,gender,email}) => {

        setLoading(true)

        try {
            const res = await fetch("/api/auth/user-details", {
                method: "POST",
                headers: {"Content-type":"application/json"},
                body: JSON.stringify({fullname,mobile,email,gender})
            });

            if(res.status == 200) navigate("/otp_verify");

            const data = await res.json()

            if(data.error){
                throw new Error(data.error)
            }

            

        } catch (error) {
            toast.error(error.message)           
        }finally{
            setLoading(false)
        }
    }

    return {loading,signup}
}

export default useSignup;
