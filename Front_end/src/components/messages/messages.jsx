import React,{useEffect,useRef} from 'react'
import Message from './Message'
import useGetMessage from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeleton/MessageSkeleton';
import { useListenMessages } from '../../hooks/useListenMessages';

const Messages = () => {
  
  const {messages,loading} = useGetMessage();

  useListenMessages();

  const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
  
  return (
    <div className='px-4 overflow-auto'>

      {!loading && messages.length > 0 && messages.map((message,idx)=>(
        <div key={message._id} ref={lastMessageRef}>
          {/* {console.log(message)} */}
          <Message key={idx} message={message} />
        </div>
      ))}

      {loading && [...Array(4)].map((_,idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p>send message to start conversation</p>
      )}

    </div>
  )
}

export default Messages