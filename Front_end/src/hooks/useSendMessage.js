import React, { useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from "react-hot-toast"
import { json } from 'express';

const useSendMessage = () => {
    const {loading,setLoading} = useState(false);

    const {messages,setMessages,selectedConversation} = useConversation();

    const sendMessage = async(message) => {
        setLoading(true)

        try {
            const res = await fetch(`/send/${selectedConversation.id}`,{
                method: "POST",
                headers:{"Content-type":"application/json"},
                body: JSON.stringify({message})
            })//link for send message api

            const data = res.json()
            if(data.error){ throw new Error(data.error)}

            setMessages([...messages,data])

        } catch (error) {
            toast.error(error.message)
        } finally{
            setLoading(false)
        }
    }

    return {sendMessage,loading}
}

export default useSendMessage