import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const {login} = useLogin();

  const handleSubmit = async(e)=>{
    e.preventDefault();

    await login({username,password});
  }

  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='p-2 text-xl font-mono font-extrabold'>Login</h1>

        <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <label className='mb-1  font-extrabold'>Username</label>
                <input className='rounded-lg py-1 mx-1 px-4 mb-3 input input-primary' placeholder='Enter username'
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
                ></input>
        
                <label className='mb-1 font-extrabold'>Password</label>
                <input className='rounded-lg py-1 mx-1 px-4 mb-3 input input-primary' placeholder='Enter password'
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                ></input>
            </div>

            <Link to='/signup'>{"Don't"} have an account ?</Link>

            <div>
                <button className='bg-white text-black px-3 py-2 m-3 w-full rounded-full bordered hover:bg-black hover:text-white font-extrabold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...' >Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login