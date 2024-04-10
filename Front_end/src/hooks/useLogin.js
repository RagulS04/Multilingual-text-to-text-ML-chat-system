import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading,setLoading] = useState(false);
    const {setAuthuser} = useAuthContext();

    const login = async({email,password}) => {
        
        const check = checkError({email,password})

        if(!check) return;

        setLoading(true);
        
        try {
            const res = await fetch("http://localhost:5000/api/auth/login",{
                method: "POST",
                headers: {"Content-type" : "application/json"},
                body: JSON.stringify({email,password})
            });

            const data = await res.json()

            
            
            if(data.error){
                throw new Error(data.error);
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
            console.log(error.message)
            toast.error(error.message);
        } finally{
            setLoading(false)
        }
    }

    return {loading,login}
}

export default useLogin

function checkError ({email,password}){
    if(!email || !password){
        toast.error("Please fill all the fields")
        return false;
    }

    return true;
}