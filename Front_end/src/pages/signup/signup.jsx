import React from 'react'
import GenderCheckBox from './GenderCheckBox';

const signup = () => {
  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='p-2 text-xl font-mono font-extrabold'>Signup</h1>

        <form>
            <div className='flex flex-col'>
                <label className='mb-1  font-extrabold'>Fullname</label>
                <input className='w-full rounded-lg py-1 mx-1 px-4 mb-3 input input-primary' placeholder='Enter username'></input>

                <label className='mb-1  font-extrabold'>Username</label>
                <input className='w-full rounded-lg py-1 mx-1 px-4 mb-3 input input-primary' placeholder='Enter username'></input>
        
                <label className='mb-1 font-extrabold'>Password</label>
                <input className='w-full rounded-lg py-1 mx-1 px-4 mb-3 input input-primary' placeholder='Enter password'></input>

                <label className='mb-1  font-extrabold'>Confirm password</label>
                <input className='w-full rounded-lg py-1 mx-1 px-4 mb-3 input input-primary' placeholder='Enter username'></input>

                <GenderCheckBox />
                
            </div>

            <a href='#'>Already have an account ?</a>

            <div>
                <button className='bg-white text-black px-3 py-2 m-3 w-full rounded-full bordered hover:bg-black hover:text-white font-extrabold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...' >Login</button>
            </div>
        </form>
    </div>
  )
}

export default signup;