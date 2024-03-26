import { useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from "react-hot-toast"

const useSendMessage = () => {
    const [loading,setLoading] = useState(false);

    const {messages,setMessages,selectedConversation} = useConversation();

    const sendMessage = async(message) => {
        setLoading(true)

        const token = localStorage.getItem('token')

        try {
            const res = await fetch(`http://localhost:5000/api/messages/send/${selectedConversation._id}`,{
                method: "POST",
                headers:{"Content-type":"application/json",'Authorization': `${token}`},
                body: JSON.stringify({message})
            })//link for send message api

            const data = await res.json()

           // console.log(data.data)

            if(data.error){ throw new Error(data.error)}

            //const msg = data.data.message;

            setMessages([...messages,data.data])

        } catch (error) {
            toast.error(error.message)
        } finally{
            setLoading(false)
        }
    }

    return {sendMessage,loading}
}

export default useSendMessage