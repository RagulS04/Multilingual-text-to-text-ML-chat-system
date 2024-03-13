import React from 'react'
import {IoSearchSharp} from "react-icons/io5"

const SearchInput = () => {
  return (
    <form className='flex gap-3 p-2'>
        <input placeholder='Search' type='text' className='input input-bordered rounded-full' ></input>
        
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
		</button>
    </form>
  )
}

export default SearchInput