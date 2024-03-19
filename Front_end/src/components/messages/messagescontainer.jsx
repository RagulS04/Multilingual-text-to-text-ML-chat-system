import React, { useEffect } from 'react'
import Messages from './messages'
import Messageinput from './messageinput'

import Lottie from 'lottie-react'
import chat_interface from "../../assets/img/animation/chat_interface.json"
import useConversation from '../../zustand/useConversation'

const messagescontainer = () => {
    const {selectedConversation,setSelectedConversation} = useConversation();

    useEffect(()=>{
        return () => setSelectedConversation(null);
    },[setSelectedConversation])
    
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        { !selectedConversation ? (<NoChatSelected />) : (
            <>
                <div className='bg-gray-800 px-4 py-2 mb-2'>
                    <span className='text-white font-bold '>TO:</span>
                    <span className='pl-6 font-bold'>{selectedConversation.fullname}</span>
                </div>

                <Messages />

                <Messageinput />
            </>
        )}
    </div>
  )
}

export default messagescontainer


const NoChatSelected = () =>{
    return (
        <div className='flex items-center justify-center'>
            
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2 mt-12'>
				<p>Welcome 👋 ❄</p>
				<p>Select a chat to start messaging</p>

				<Lottie animationData={chat_interface} className='absolute top-20 w-13 h-13 mt-11 ' />
			</div>
		</div>
    );
}

