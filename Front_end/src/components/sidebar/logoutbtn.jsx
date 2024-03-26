import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';

const LogoutBtn = () => {

  const {loading,logout} = useLogout();

  return (
    <div className='mt-auto p-3'>
        {!loading ? <TbLogout2 className='w-6 h-6 text-white cursor-pointer' onClick={logout} /> : <span className="loading loading-spinner loading-lg"></span>}
    </div>
  )
}

export default LogoutBtn