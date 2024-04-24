import {useState} from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext'


const usePassword = () => {
    const [loading,setLoading] = useState(false)

    const {setAuthuser} = useAuthContext();

    const setpass = async({email,password,confirmPassword})=>{
        try {
            setLoading(true);

            const res = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: {"Content-type":"application/json"},
                body: JSON.stringify({email,password,confirmPassword})
            });

            const data = await res.json()



            if(data.error){
                throw new Error(data.error)
            }

            

            if(res.status !== 200){
                toast.error(data.message)
            }else {
                toast.success(data.message)
                const token = data["token"];
            localStorage.setItem('token', token);
            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthuser(data)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return {loading,setpass}
}

export default usePassword