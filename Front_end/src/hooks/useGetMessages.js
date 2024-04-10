import {useEffect, useState} from 'react'
import useConversation from '../zustand/useConversation';
import toast from "react-hot-toast"
import useSendMessage from './useSendMessage';

const useGetMessages = () => {
    const [loading,setLoading] = useState(false);
    const {sendMessage} = useSendMessage()

    const {messages,setMessages,selectedConversation} = useConversation();

    useEffect(()=>{
        const getMessages = async() => {
            setLoading(true);

            const token = localStorage.getItem('token')

            try {

                const res = await fetch(`http://localhost:5000/api/messages/${selectedConversation._id}`,{
                    method:"GET",
                    headers:{
                        'Authorization': `${token}`
                    }
                })//link for send message api

                //console.log("response",res.messages)

                const data =await res.json();

                //console.log(data[0])
                
                if(data.error){ throw new Error(data.error)}

                setMessages(data)
                
            } catch (error) {
                console.log(error.message)
                toast.error(error.message)
            } finally{
                setLoading(false)
            }
        }

        if(selectedConversation?._id){
            getMessages()
        }

    },[setMessages, selectedConversation._id])

    return {loading,messages}
}

export default useGetMessages