import React from 'react'
import {FaArrowUpLong} from "react-icons/fa6";
import {motion} from "framer-motion"

function LandingPage() {
  return (
    <div data-scroll  data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We Create","Eye Opening","Persentations"].map((item,index)=>{
                return <div className="masker">
                    <div className='w-fit flex items-center'>
                        {index==1 && (
                        <motion.div 
                        initial={{width:0}}
                         animate ={{width:"9vw"}} 
                         transition={{ease:[0.76,0,0.24,1] ,duration: 1}} 
        
  className="mr-5 w-[9vw] h-[5.7vw] top-[1vw] relative rounded-md bg-cover bg-center"
  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80")' }}
></motion.div>


            )}
                         <h1 className=" pt-[2vw] -mb-[1vw] uppercase text-[8.5vw] h-full leading-[5.5vw] font-['Founders_Grotesk__X-Condensed'] font-bold">{item}</h1>

                    </div>
               
            </div>
            })}
            
        </div>
      <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
    {["For Public and private companies" ,"From the first pitch to IPO"

    ] .map((item,index)=>(
    <p className="text-md font-light tracking-tight leading-none">{item}</p>
    ))}
    <div className="start flex items-center gap-5">
        <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase  ">start the project</div>
        <div className="w-10 h-10 border-[2px] flex items-center justify-center border-zinc-500 rounded-full ">
              <span className='rotate-[45deg]'>
                
                </span> 
        </div>
    </div>
      </div>
    </div>
    
  );
}

export default LandingPage
