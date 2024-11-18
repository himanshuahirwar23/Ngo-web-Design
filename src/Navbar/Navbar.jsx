import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: <a href="/office">Office Bearers</a>,
    key: "0",
  },
  {
    label: <a href="/governing">Governing Community</a>,
    key: "1",
  },
  {
    type: "divider",
  },
];

const programs = [
  {
    label: <a href="guidance">Education Guidance</a>,
    key: "0",
  },
  {
    label: <a href="skill">Skill Development</a>,
    key: "1",
  },
  {
    label: <a href="scholarship">Scholarship</a>,
    key: "2",
  },
  {
    label: <a href="quresh">Quresh Matrimony</a>,
    key: "3",
  },
  {
    type: "divider",
  },
];
const Navbar = () => {
  return (
    <div className="w-full h-20 bg-blue-200 flex justify-center items-center ">
      <ul className="cursor-pointer flex justify-between items-center gap-6 text-[15px] ">
        <NavLink to="/">
          {" "}
          <li>Home</li>
        </NavLink>

        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Governing Body
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        {/* <NavLink>  <li className='flex items-center gap-2'>Governing Body <IoIosArrowDown />
            </li> </NavLink> */}
        <Dropdown
          menu={{
            items: programs,
          }}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Programs
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        {/* <NavLink>  <li className='flex items-center gap-2'>Programs <IoIosArrowDown />
            </li> </NavLink> */}
        <NavLink to="/gallery">
          <li>Gallery</li>
        </NavLink>
        <NavLink to="/membership">
          <li>Membership</li>
        </NavLink>
        <li>Annual Reports</li>
        <li>Contact Us</li>
      </ul>
      <button className="bg-blue-500 text-white px-5 py-2 ml-20 rounded-md">
        Donate Now
      </button>
    </div>
  );
};

export default Navbar;
