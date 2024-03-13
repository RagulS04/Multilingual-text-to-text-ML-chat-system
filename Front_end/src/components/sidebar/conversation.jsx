import React from 'react'

const conversation = () => {
  return (
    <div className='flex items-center gap-x-5 hover:bg-blue-200 py-2 px-3 rounded-lg mb-2'>
        <div className="avatar online">
          <div className="w-12 h-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt=''/>
          </div>
        </div>
        <p className='font-bold text-black font-mono'>User1</p>
    </div>
  )
}

export default conversation