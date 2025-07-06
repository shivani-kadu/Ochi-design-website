import { motion } from 'framer-motion';
import React from 'react';

function Featured() {
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
        <div className='flex gap-10'>

          {/* FYDE Card */}
          <motion.div
            initial="initial"
            whileHover="hover"
            variants={containerAnimation}
            className='relative w-1/2 h-[80vh] overflow-hidden group cursor-pointer rounded-xl'
          >
            {/* Left-aligned FYDE */}
            <div className='absolute z-10 flex gap-2 left-10 top-1/2 -translate-y-1/2 text-[#CDEA68] text-6xl font-semibold leading-none tracking-tight'>
              {"FYDE".split('').map((letter, index) => (
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
              src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
              alt="FYDE"
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.77, 0, 0.175, 1)]'
            />
          </motion.div>

          {/* VISE Card */}
          <motion.div
            initial="initial"
            whileHover="hover"
            variants={containerAnimation}
            className='relative w-1/2 h-[80vh] overflow-hidden group cursor-pointer rounded-xl'
          >
            {/* Left-aligned VISE */}
            <div className='absolute z-10 flex gap-2 left-10 top-1/2 -translate-y-1/2 text-[#CDEA68] text-6xl font-semibold leading-none tracking-tight'>
              {"VISE".split('').map((letter, index) => (
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
              src="https://ochi.design/wp-content/uploads/2022/09/VISE1-scaled.jpg"
              alt="VISE"
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.77, 0, 0.175, 1)]'
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Featured;
