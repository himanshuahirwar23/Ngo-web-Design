import React from 'react';

const Testinomial = () => {
  const profiles = [
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
  ];
  return (
    // <div className='bg-slate-600'>
    //   {profiles.map((profiles, index) => (
    //         <div
    //           key={index}
    //           className="flex flex-col gap-4 w-[230px] h-[400px]"
    //         >
    //           <div className="text-black">
    //             <img
    //               src={profiles.image}
    //               alt={profiles.name}
    //               className="w-full "
    //             />
    //             {/* <div className="ml-4 mt-5 leading-6">
    //               <h2>{profile.name}</h2>
    //               <p>{profile.title}</p>
    //               <button className="text-white mt-2 px-5 py-2 bg-blue-600 rounded-md">
    //                 View Profile
    //               </button>
    //             </div> */}
                
    //           </div>
    //         </div>
    //       ))}

    // </div>
    <div className=''>
      <div
      className=" py-10 px-24 bg-cover bg-center"
      
    >
      <img src="/Testinomials.png" alt="" />
    </div>
    </div>
    
  );
};

export default Testinomial;
