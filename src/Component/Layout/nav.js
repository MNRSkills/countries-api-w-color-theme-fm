import React from "react";

const Nav = () => {
  return (
    <div className='bg-gray-200 w-full grid grid-rows-2 container p-10'>
      <div className='flex justify-around'>
        <h1 className='font-bold'>Where in the world?</h1>
        <button>Switch Light Mode</button>
      </div>
    </div>
  );
};

export default Nav;
