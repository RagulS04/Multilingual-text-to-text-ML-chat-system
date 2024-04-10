import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
    const [loading,setLoading] = useState();

    const {setAuthuser} = useAuthContext();

    const logout = async ()=>{
        setLoading(true)

         try {
        //     const res = await fetch("http://localhost:5000/api/auth/logout",{
        //         method: "POST",
        //         headers: {"Content-type" : "application/json"}
        //     })

        //     const data = await res.json();

        //     if(data.error){
        //         throw new Error(data.error)
        //     }

            localStorage.removeItem("chat-user");
            localStorage.removeItem("token");
            setAuthuser(null);

        } catch (error) {
            toast.error(error.message);
        } finally{
            setLoading(false)
        }
    }

    return {loading,logout}
}

export default useLogout