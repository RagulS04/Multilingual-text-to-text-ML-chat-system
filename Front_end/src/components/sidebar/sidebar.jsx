import SearchInput from './SearchInput'
import Conversations from './Conversations'
import Logoutbtn from './LogoutBtn'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-slate-500'>
        <SearchInput />
        <div className='divider px-3 '></div>

        <Conversations />
        <Logoutbtn />

    </div>
  )
}

export default Sidebar