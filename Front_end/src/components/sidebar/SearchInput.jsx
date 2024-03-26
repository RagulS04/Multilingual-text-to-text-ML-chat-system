import {useState} from 'react'
import {IoSearchSharp} from "react-icons/io5"
import useGetConversations from "../../hooks/useGetConversations"
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {

  const [search,setSearch] = useState("");
  const {conversation} = useGetConversations()
  const {setSelectedConversation} = useConversation();

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!search) return 

    const searchConversations = conversation.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));

    if(!searchConversations){
      toast.error("User doesnt exists");
    }
    else{
      setSelectedConversation(searchConversations);
      setSearch("");
    }
  }

  return (
    <form className='flex gap-3 p-2' onSubmit={handleSubmit}>
        <input placeholder='Search' type='text' className='input input-bordered rounded-full' 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
		</button>
    </form>
  )
}

export default SearchInput