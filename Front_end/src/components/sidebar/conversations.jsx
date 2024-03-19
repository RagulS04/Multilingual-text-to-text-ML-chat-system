import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'

const Conversations = () => {

  const {loading,conversation} = useGetConversations()
  return (
    <div className=''>
      {conversation.map((conversation) => (
          <Conversation key={conversation.id} 
          conversation = {conversation}
        />
      ))}

      {loading ? <span className="loading loading-spinner loading-md"></span> : null}

    </div>
  )
}

export default Conversations