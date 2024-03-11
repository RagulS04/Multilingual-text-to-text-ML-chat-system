import React from 'react'

const login = () => {
  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto bg-gray-600 rounded-lg p-6 drop-shadow-md'>
        <h1 className='p-2 text-xl font-mono font-extrabold'>Login</h1>

        <form>
            <div className='flex flex-col'>
                <label className='mb-1  font-extrabold'>Username</label>
                <input className='rounded-lg p-2 mx-1 px-4 mb-3 input input-primary' placeholder='Enter username'></input>
        
                <label className='mb-1 font-extrabold'>Password</label>
                <input className='rounded-lg p-2 mx-1 px-4 mb-3 input input-primary' placeholder='Enter password'></input>
            </div>

            <a href='#'>{"Don't"} have an account ?</a>

            <div>
                <button className='bg-white text-black p-2 m-3 w-full rounded-md bordered hover:bg-black hover:text-white font-extrabold' >Login</button>
            </div>
        </form>
    </div>
  )
}

export default login