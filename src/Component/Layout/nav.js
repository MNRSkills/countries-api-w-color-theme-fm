import React from "react";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = (props) => {
  return (
    <div className='bg-gray-200 w-full shadow-lg py-10 px-4 dark:bg-gray-900'>
      <div className='flex justify-between items-center gap-6 dark:text-gray-300'>
        <h1 className='font-bold text-sm'>Where in the world?</h1>
        <div
          className='transparent flex items-center'
          onClick={props.themeHandler}>
          <FontAwesomeIcon icon={faMoon} />
          <h2 className='px-2 '>Light Mode</h2>
        </div>
      </div>
    </div>
  );
};

export default Nav;
