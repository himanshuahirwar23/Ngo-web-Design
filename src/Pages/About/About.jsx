import React from "react";
import Navbar from "../../Navbar/Navbar";
import Page1 from "../Page1";
import Showcase from "../Showcase";
import Dashboard from "../Dashboard";
import Footer from "../Footer";
import Page3 from "./Page3";

const About = () => {
  const cards = [
    {
      name: "Our Mission",
      image: "mission.png",
    },
    {
      name: "Our Vision",
      
      image: "Group 37.png",
    },
  ];
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="w-full h-[362px] bg-center	flex items-center justify-center  mb-24"
        style={{ backgroundImage: `url(about.png)` }}
      >
        <div className="text-white leading-10  pt-12 w-[230px] h-[200px] ">
          <p>Home / About us</p>

          <h1 className=" text-5xl font-semibold">About Us</h1>
        </div>
      </div>
      {/* <Page1></Page1> */}
      <Page3></Page3>
      <Showcase></Showcase>
      <div className=" px-24 flex items-center ml-28 gap-28  py-8">
        {cards.map((cards, index) => (
          <div className="bg-white shadow-lg w-[30vw] h-[30vh]" key={index}>
            <div className="px-5  bg-red-600py-3">
              <div className="w-9 h-9 ">
                <img src={cards.image} alt="" />
              </div>
              <div>
                <h1 className="font-semibold text-lg">{cards.name}</h1>
                <p className="text-[#868686]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor adipiscing elit, sed do eiusmod tempor{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* <img src="Frame 1149.png" alt="" /> */}
      </div>

      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>
  );
};

export default About;
