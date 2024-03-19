import React from 'react'
import Message from './message'
import useGetMessage from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeleton/MessageSkeleton';

const messages = () => {
  
  const {messages,loading} = useGetMessage();

  const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
  
  return (
    <div className='px-4 overflow-auto'>

      {!loading && messages.length > 0 && messages.map((message)=>(
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message} />
        </div>
      ))}

      {loading && [...Array(3)].map((_,idx) => <MessageSkeleton key={idx} />)}
      {loading && messages.length === 0 && (
        <p>send message to start conversation</p>
      )}

    </div>
  )
}

export default messages