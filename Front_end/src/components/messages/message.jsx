import React from 'react'

const message = () => {
  return (
    <div>
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            
            <div className="chat-bubble">You were the Chosen One!</div>
            <time className="text-xs opacity-50">12:45</time>
        </div>
    </div>
  )
}

export default message