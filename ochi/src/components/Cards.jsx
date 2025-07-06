import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='card container h-[50vh] w-1/2'>
        <div className=' card relative rounded-xl card w-full h-full bg-[#004D43] flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute px-5 py-1 left-10 bottom-10 rounded-full border-2 '>&copy; 2019-2022</button>
        </div>

        </div> 
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-[50vh] bg-[#213734]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
             <button className='absolute px-5 py-1 left-10 bottom-10 rounded-full border-2 '>&copy; 2019-2022</button>
            </div>

           
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-[50vh] bg-[#21423e]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute px-5 py-1 left-10 bottom-10 rounded-full border-2 '>&copy; 2019-2022</button></div>
      </div>
    </div>
    
  )
}

export default Cards
