import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div className='min-h-screen flex items-center justify-center bg-dark flex-col'> 
    <img src="/404/Oops! 404 Error with a broken robot-cuate.svg" alt="404"  className='size-4/5'/>
    <div className='w-full '>
    <p className='text-2xl font-bold text-white -mt-10 text-center'>Page Not Found</p>
    <div className='w-1/2 mx-auto '>
        <button className='bg-primary hover:bg-secondary duration-200 transition-all text-white px-10 py-2 rounded-md mt-4  w-full font-semibold text-nowrap'>
            <Link to='/'>
            Back To Home
            </Link>

        </button>
    </div>

    </div>

    </div>
    </>
  )
}

export default NotFound