import  { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
//import useConversation from '../zustand/useConversation';

const useGetConversations = () => {
    const [loading,setLoading] = useState(false)
    const [conversation,setConversation] = useState([]);
    

    useEffect(()=>{
        const getConversation = async()=>{
            setLoading(true)

            try {
                const token = localStorage.getItem('token');
                const res = await fetch(`http://localhost:5000/api/users`,{
                    method: 'GET',
                    headers: {
                        'Authorization' : `${token}`
                    }
                })//link to get users
                const data =await res.json();

                if(data.error){ throw new Error(data.error)}

                //console.log(data)

                

                setConversation(data)

                //console.log(conversation,"hello")
            } catch (error) {
                toast.error(error.message)
            } finally{
                setLoading(false)
            }
        }

        getConversation();
    },[])

    return {loading,conversation}
}

export default useGetConversations