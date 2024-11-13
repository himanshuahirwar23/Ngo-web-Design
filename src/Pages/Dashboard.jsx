import React from 'react'

const Dashboard = () => {
  return (
    
      <div className='w-full flex p-24 mb-[250px] items-center justify-between bg-[#f5f5f5] h-[15vh]'>
        <h2 className="text-xl font-medium	 text-start text-black ">Our Trusted <br /> Partner</h2>
      <div className="flex gap-10">
        {/* Partner Logos */}
        <img src="Header-1.png" alt="" className="h-12 " />
        <img src="Header-2.png" alt="" className="" />
        <img src="Header-3.png" alt="" className="h-12 " />
        <img src="Header-4.png" alt="" className="h-12 " />
      </div>
      </div>
    
  )
}

export default Dashboard