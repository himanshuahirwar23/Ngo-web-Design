import React from 'react';

const Footer = () => {
  return (
    <div>
       <div className="text-center mb-[-88px]">
        <div className=" bg-cover bg-center 	 text-white h-[30vh] w-[60vw]  inline-block"
        style={{ backgroundImage: `url(Footerframe.png)`,borderRadius:`20px` }}>

          <h2 className="text-2xl font-semibold"></h2>
          <button className="mt-[95px] bg-white text-[#4f46e5] px-4 py-2 rounded-lg font-medium">
            Donate Now
          </button>
        </div>
      </div>
    <footer className="bg-[#eaebfe] py-10 px-6">
     

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-6">
        <div className="flex flex-col mt-[10vw] items-center md:items-start text-center md:text-left ">
          {/* <img src="/path/to/logo.png" alt="Quresh Conference Logo" className="h-20 mb-4" /> */}
          <h3 className="text-lg pb-2 font-medium">QURESH CONFERENCE (Regd.)</h3>
          <p>(A SOCIAL ORGANISATION OF QURESH <br /> COMMUNITY IN INDIA)</p>
          <div className="text-center md:text-left">
          <div className="flex items-center border rounded-md p-1">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 outline-none flex-grow"
            />
            <button className="bg-[#4f46e5] text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-10">©logo | All rights reserved</p>
          
          
        </div>
        </div>

        <div className="flex flex-row md:flex-row justify-between text-center md:text-left space-y-6 md:space-y-0 md:space-x-12 mt-[65px]    md:mb-0">
          <div>
            <h4 className="text-sm  font-semibold mb-2">Programs</h4>
            <ul className='text-sm leading-10	'>
              <li>Educational Guidance</li>
              <li>Skill Development</li>
              <li>Scholarship</li>
              <li>Quresh Matrimony</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">Platform</h4>
            <ul className='text-sm leading-10	'>
              <li>Home</li>
              <li>About Us</li>
              <li>Gallery</li>
              <li>Annual Report</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className=" text-sm font-semibold mb-2">Contact</h4>
            <ul className=' text-sm leading-10'>
              <li>New Delhi - 110095</li>
              <li>+91 9876543210</li>
              <li>qureshconference@gmail.com</li>
            </ul>
          </div>
        </div>

        
      </div>
<div className='w-full bg-black h-[1px] mt-4 z-10'></div>

    </footer>
    </div>
  );
};

export default Footer;
