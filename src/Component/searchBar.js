import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = (props) => {
  return (
    <div className='dark:text-white w-full mx-0 py-10'>
      <input
        type='text'
        placeholder='Search for a country..'

        name='name'
        onChange={props.handleChange}
        className='rounded w-full dark:bg-wordsNight p-3'
      />
    </div>
  );
};

export default SearchBar;
