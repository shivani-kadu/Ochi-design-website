import React, { useEffect, useState } from 'react';

function Eyes() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate center of window
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Distance from center (normalize and limit)
      const dx = (mouseX - centerX) / centerX;
      const dy = (mouseY - centerY) / centerY;

      // Limit translation range, e.g., max 20px
      const maxOffset = 20;
      const offsetX = dx * maxOffset;
      const offsetY = dy * maxOffset;

      setPosition({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const Eye = () => (
    <div className='flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-200'>
      <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 overflow-hidden'>
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`
          }}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        >
          <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className='w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Eye />
          <Eye />
        </div>
      </div>
    </div>
  );
}

export default Eyes;
