// import React from "react";
// import Navbar from "../../Navbar/Navbar";
// import Footer from "../Footer";
// import Dashboard from "../Dashboard";
// import emailjs from '@emailjs/browser';

// const ContactUs = () => {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <div>
//         <div
//           className="w-full h-[362px] bg-center	flex items-center justify-center  "
//           style={{ backgroundImage: `url(governing.png)` }}
//         >
//           <div className="text-white leading-10 text-center pt-12  w-[600px] h-[200px] ">
//             <p>Home / About Us</p>

//             <h1 className=" text-5xl font-semibold">Contact Us</h1>
//           </div>
//         </div>
//         <div className="mb-10">
//           <div className="bg-[#eaebfe] px-24 py-20 ">
//             <div className="px-4">
            
//             </div>
//             <div className="max-w-7xl mx-auto px-4">
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                 <h2 className="text-xl mb-5 font-semibold w-[20vw]">
//                 Registered Office
//               </h2>
//                   <p className="font-semibold text-gray-700">Our Office</p>
//                   <p className="text-gray-600 mt-2">Delhi</p>
//                   <p className="text-gray-600">
//                     F-100, Dilshad Colony, Delhi - 110095
//                   </p>
//                   <div className="mt-4">
//                     <p className="text-gray-600">
//                       📧{" "}
//                       <a
//                         href="mailto:info@rnbtobic.in"
//                         className="text-blue-500"
//                       >
//                        info@nxtbloc.in
//                       </a>
//                     </p>
//                     <p className="text-gray-600">
//                       📧{" "}
//                       <a
//                         href="mailto:investorrelations@rnbtobic.in"
//                         className="text-blue-500"
//                       >
//                         Investor.relations@nxtbloc.in
//                       </a>
//                     </p>
//                     <p className="text-gray-600">
//                       📧{" "}
//                       <a
//                         href="mailto:subjectsecretary@rnbtobic.in"
//                         className="text-blue-500"
//                       >
//                         subjectsecretary@rnbtobic.in
//                       </a>
//                     </p>
//                     <p className="text-gray-600">
//                       📞 <span className="font-medium">011-35756656</span>
//                     </p>
//                   </div>
//                 </div>
//                 <div>
//                   <img className="h-[50vh] w-[35vw]" src="image 110.png" alt="" />
//                 </div>
//               </div>
//             </div>

//             <div className="mt-10  bg-white py-10">
//               <div className="max-w-4xl mx-auto px-4">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">
//                   Get in touch
//                 </h2>
//                 <p className="text-gray-600 mb-8">
//                   Our team is happy to address all your queries. Fill out the
//                   form and we will be in touch with you as soon as we can.
//                 </p>
//                 <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block text-gray-700 font-medium"
//                     >
//                       Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
                      
//                       placeholder="Enter your full name"
//                       className="w-full mt-2 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-gray-700 font-medium"
//                     >
//                       Email *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       placeholder="Enter your email id"
//                       className="w-full mt-2 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="mobile"
//                       className="block text-gray-700 font-medium"
//                     >
//                       Mobile *
//                     </label>
//                     <input
//                       type="text"
//                       id="mobile"
//                       placeholder="Enter your mobile number"
//                       className="w-full mt-2 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="subject"
//                       className="block text-gray-700 font-medium"
//                     >
//                       Subject
//                     </label>
//                     <input
//                       type="text"
//                       id="subject"
//                       placeholder="e.g. Amazon"
//                       className="w-full mt-2 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
//                   <div className="col-span-2">
//                     <label
//                       htmlFor="query"
//                       className="block text-gray-700 font-medium"
//                     >
//                       Your Query
//                     </label>
//                     <textarea
//                       id="query"
//                       placeholder="Type your message"
//                       className="w-full mt-2 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//                       rows="4"
//                     ></textarea>
//                   </div>
//                   <div className="col-span-2">
//                     <button
//                       type="submit"
//                       className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <Dashboard></Dashboard>
//           <Footer></Footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useRef } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer";
import Dashboard from "../Dashboard";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef(); // Ref for the form

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7roa454", // Replace with your Service ID
        "template_n5jzkqe", // Replace with your Template ID
        formRef.current,
        "8UZY187OxwbQ5OV8y" // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Email sending failed!", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );

    e.target.reset(); // Reset the form fields
  };

  return (
    <div>
      <Navbar />
      <div>
        <div
          className="w-full h-[362px] bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(governing.png)` }}
        >
          <div className="text-white leading-10 text-center pt-12 w-[600px] h-[200px]">
            <p>Home / About Us</p>
            <h1 className="text-5xl font-semibold">Contact Us</h1>
          </div>
        </div>
        <div className="mb-10">
          <div className="bg-[#eaebfe] px-24 py-20">
            <div className="px-4"></div>
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl mb-5 font-semibold w-[20vw]">
                    Registered Office
                  </h2>
                  <p className="font-semibold text-gray-700">Our Office</p>
                  <p className="text-gray-600 mt-2">Delhi</p>
                  <p className="text-gray-600">
                    F-100, Dilshad Colony, Delhi - 110095
                  </p>
                  <div className="mt-4">
                    <p className="text-gray-600">
                      📧{" "}
                      <a
                        href="mailto:info@rnbtobic.in"
                        className="text-blue-500"
                      >
                        info@nxtbloc.in
                      </a>
                    </p>
                    <p className="text-gray-600">
                      📧{" "}
                      <a
                        href="mailto:investorrelations@rnbtobic.in"
                        className="text-blue-500"
                      >
                        Investor.relations@nxtbloc.in
                      </a>
                    </p>
                    <p className="text-gray-600">
                      📧{" "}
                      <a
                        href="mailto:subjectsecretary@rnbtobic.in"
                        className="text-blue-500"
                      >
                        subjectsecretary@rnbtobic.in
                      </a>
                    </p>
                    <p className="text-gray-600">
                      📞 <span className="font-medium">011-35756656</span>
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="h-[50vh] w-[35vw]"
                    src="image 110.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 bg-white py-10">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Get in touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Our team is happy to address all your queries. Fill out the
                  form and we will be in touch with you as soon as we can.
                </p>
                <form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="grid grid-cols-1 max-md:grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      id="name"
                      placeholder="Enter your full name"
                      className="w-full mt-2 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      id="email"
                      placeholder="Enter your email id"
                      className="w-full mt-2 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-gray-700 font-medium"
                    >
                      Mobile *
                    </label>
                    <input
                      type="text"
                      name="from_mobile"
                      id="mobile"
                      placeholder="Enter your mobile number"
                      className="w-full mt-2 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="from_subject"
                      id="subject"
                      placeholder="e.g. Amazon"
                      className="w-full mt-2 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="query"
                      className="block text-gray-700 font-medium"
                    >
                      Your Query
                    </label>
                    <textarea
                      name="message"
                      id="query"
                      placeholder="Type your message"
                      className="w-full mt-2 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Dashboard />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
