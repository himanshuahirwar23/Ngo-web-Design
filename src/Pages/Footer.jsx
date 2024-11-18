import React from 'react';

const Footer = () => {
  return (
    <div>
       <div className="text-center  mb-[-115px]">
        <div className=" text-white  bg-cover	 h-[40vh] w-[86vw]   inline-block"
        style={{ backgroundImage: `url(Footerframe.png)`,
         }}
        >
          <div className='w-[400px] ml-[26vw] items-center mt-9  h-[182px]  '>
            <h1 className='text-[30px] font-semibold'>Start Contributing for  better tomorrow</h1>
            <button className='px-6 bg-white mt-5 text-[#6b61ee] py-2 rounded-md'>Donate Now</button>
          </div>

        </div>
      </div>
    <footer className="bg-[#eaebfe] py-20 px-6">
     

      <div className=" flex flex-col md:flex-row justify-between items-center md:items-start px-6">
        <div className=" flex flex-col mt-[10vw] ml-11 items-center md:items-start text-center md:text-left ">
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

        <div className="flex mr-[49px] flex-row md:flex-row justify-between text-center md:text-left space-y-6 md:space-y-0 md:space-x-12 mt-[65px]    md:mb-0">
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
              <li>conference@gmail.com</li>
            </ul>
          </div>
        </div>

        
      </div>
<div className='w-full bg-black h-[.06px] mt-4 z-10'></div>


    </footer>
    </div>
  );
};

export default Footer;
