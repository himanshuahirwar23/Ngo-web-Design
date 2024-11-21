import React from "react";

const Card1 = () => {
  return (
    <div className="px-24">
      <div className="woverflow-hidden w-[20vw] rounded-lg shadow-md">
        <img src="Rectangle 30 (3).png" alt="" className="" />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-700">Headline</h2>
          <p className="mt-2 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <button className="mt-4 w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
