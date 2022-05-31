import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = (props) => {
  return (
    <div className='dark:text-white w-full mx-0 flex justify-center shadow-lg rounded md:h-10'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='mt-3' />
      <input
        type='text'
        placeholder='Search for a country..'
        onSubmit={props.handleSubmit}
        name='name'
        onChange={props.handleChange}
        className='rounded w-full dark:bg-wordsNight p-3 outline-none md:w-80'
      />
    </div>
  );
};

export default SearchBar;
