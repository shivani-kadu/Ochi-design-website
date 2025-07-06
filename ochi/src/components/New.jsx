import React from 'react';
import { motion } from 'framer-motion';

function New() {
  const textAnimation = {
    initial: { y: "100%" },
    hover: { y: "0%" },
  };

  const containerAnimation = {
    initial: {},
    hover: { transition: { staggerChildren: 0.05 } },
  };

  return (
    <div className='w-full py-20 bg-black text-white'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-10'>
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured</h1>
      </div>

      <div className='px-20 mt-10'>
        <div className='cards w-full flex gap-10'>

          {/* BEAN Card */}
          <motion.div
            initial="initial"
            whileHover="hover"
            variants={containerAnimation}
            className='cardcontainer relative w-1/2 h-[80vh] overflow-hidden group rounded-xl cursor-pointer'
          >
            <div className='absolute z-10 flex gap-2 left-10 top-1/2 -translate-y-1/2 text-[#CDEA68] text-6xl font-semibold leading-none tracking-tight'>
              {"BEAN".split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={textAnimation}
                  className='inline-block overflow-hidden'
                >
                  <motion.span
                    variants={textAnimation}
                    className='inline-block'
                  >
                    {letter}
                  </motion.span>
                </motion.span>
              ))}
            </div>

            <img
              src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
              alt="BEAN"
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.77, 0, 0.175, 1)]'
            />
          </motion.div>

          {/* ONBOARD Card */}
          <motion.div
            initial="initial"
            whileHover="hover"
            variants={containerAnimation}
            className='cardcontainer relative w-1/2 h-[80vh] overflow-hidden group rounded-xl cursor-pointer'
          >
            <div className='absolute z-10 flex gap-2 left-10 top-1/2 -translate-y-1/2 text-[#CDEA68] text-6xl font-semibold leading-none tracking-tight'>
              {"ONBOARD".split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={textAnimation}
                  className='inline-block overflow-hidden'
                >
                  <motion.span
                    variants={textAnimation}
                    className='inline-block'
                  >
                    {letter}
                  </motion.span>
                </motion.span>
              ))}
            </div>

            <img
              src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg"
              alt="ONBOARD"
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.77, 0, 0.175, 1)]'
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default New;
