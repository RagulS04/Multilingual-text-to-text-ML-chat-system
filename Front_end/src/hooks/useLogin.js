import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading,setLoading] = useState(false);
    const {setAuthuser} = useAuthContext();

    const login = async({username,password}) => {
        
        const check = checkError({username,password})

        if(!check) return;

        setLoading(true);
        
        try {
            const res = await fetch("http",{
                method: "POST",
                headers: {"Content-type" : "application/json"},
                body: JSON.stringify({username,password})
            })

            const data = res.json()

            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthuser(data)

        } catch (error) {
            toast.error(error.message);
        } finally{
            setLoading(false)
        }
    }

    return {loading,login}
}

export default useLogin

function checkError ({username,password}){
    if(!username || !password){
        toast.error("Please fill all the fields")
        return false;
    }

    return true;
}