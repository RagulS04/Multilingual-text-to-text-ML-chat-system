import { useSocketContext } from '../../context/SocketContext';
import useConversation from '../../zustand/useConversation'

const Conversation = ({conversation}) => {

  const {selectedConversation,setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const {onlineUsers} = useSocketContext()

  const isOnline = onlineUsers.includes(conversation._id)
  return (
    <div className={`flex items-center gap-x-5 hover:bg-blue-200 py-2 px-3 rounded-lg mb-2
      ${ isSelected ? "bg-sky-500" : ""}`
    } onClick={()=>{
      setSelectedConversation(conversation)
    }}>
      
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 h-12 rounded-full">
            <img src={conversation.profilePic} alt='avatar'/>
          </div>
        </div>
        <p className='font-bold text-black font-mono'>{conversation.fullname}</p>
    </div>
  )
}

export default Conversation