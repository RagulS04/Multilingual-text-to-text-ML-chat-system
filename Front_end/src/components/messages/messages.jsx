import React from 'react'
import Message from './message'

const messages = () => {
  return (
    <div className='px-4 overflow-auto'>
        <Message />
        <Message />
    </div>
  )
}

export default messages