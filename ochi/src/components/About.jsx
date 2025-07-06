import React from 'react'

function About() {
  return (
    <div className='w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">Ochi is a startegic partner for fast-growing tech bussiness that need to raise  funds,sell products, explain complex ideas,and hire great people .</h1>
      <div className ='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#2e002b]'>
     <div className='w-1/2 '>
     <h1 className='text-6xl'>Our apporach:</h1>
     <button className='uppercase flex gap-10 px-10 py-6 items-center bg-zinc-900 mt-10 rounded-full text-white'>Read More
        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div></button>
     </div>
<div
  className='w-1/2 h-[70vh] rounded-3xl bg-[#121211] bg-cover bg-center'
  style={{ backgroundImage: `url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg")` }}
 >

     <img src="" alt="" /></div>
      </div>
    </div>
  )
}

export default About
