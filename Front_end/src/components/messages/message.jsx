import React from 'react'
import {useAuthContext} from "../../context/AuthContext"
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {

  const {authuser} = useAuthContext();
  const {selectedConversation} = useConversation()

  const shakeClass = message => message.shouldShake ? "shake" : "";

  const fromMe = message.senderId === authuser.data._id;

  const chatClass = fromMe ? "chat-end" : "chat-start";
  const formattedTime = extractTime(message.createdAt)
  const profilePic = fromMe ? authuser.data.profilePic : selectedConversation.profilePic;
  const bubbleBgcolour = fromMe ? "bg-blue-500" : ""

  return (
    <div>
        <div className={`chat ${chatClass}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src={`${profilePic}`} />
                </div>
            </div>
            
            <div className={`chat-bubble ${bubbleBgcolour} ${shakeClass}`}>{message.message}</div>
            <time className="text-xs opacity-50">{formattedTime}</time>
        </div>
    </div>
  )
}

export default Message