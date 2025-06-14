import React from 'react'

const First = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full h-full grid grid-cols-[repeat(6,minmax(0,1fr))_62px_62px_repeat(6,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))_62px_62px_repeat(3,minmax(0,1fr))] gap-3 p-3">
        {/* Top Left Large Box */}
        <div className="box1 border-2 border-[#3b3b4f] rounded-xl bg-[#181926]/70 backdrop-blur-sm col-start-1 col-end-7 row-start-1 row-end-6" />
        
        {/* Top Right Large Box */}
        <div className="box2 border-2 border-[#3b3b4f] rounded-xl bg-[#181926]/70 backdrop-blur-sm col-start-7 col-end-14 row-start-1 row-end-4" />
        
        {/* Vertical Box on Far Right */}
        <div className="box3 border-2 border-[#3b3b4f] rounded-xl bg-[#181926]/70 backdrop-blur-sm col-start-14 col-end-15 row-start-1 row-end-4" />
        
        {/* Center Square (Profile) */}
        <div className="box4 border-2 border-[#3b3b4f] rounded-xl bg-[#181926]/70 backdrop-blur-sm col-start-1 col-end-4 row-start-6 row-end-9" />
        
        {/* Middle Left Box (box5) - This is our anchor box */}
        <div className="box5-container col-start-7 col-end-9 row-start-4 row-end-6 flex items-center justify-center">
          <div 
            className="box5 w-full h-full border-2 border-[#3b3b4f] rounded-xl bg-[#181926]/70 backdrop-blur-sm"
          />
        </div>
        
        {/* Middle Right Box */}
        <div className="box6 border-2 border-[#3b3b4f] rounded-xl bg-[#181926]/70 backdrop-blur-sm col-start-4 col-end-9 row-start-6 row-end-9" />
        
        {/* Bottom Large Box */}
        <div className="box7 border-2 border-[#3b3b4f] rounded-xl bg-[#181926]/70 backdrop-blur-sm col-start-9 col-end-15 row-start-4 row-end-9" />
      </div>
    </div>
  )
}

export default First