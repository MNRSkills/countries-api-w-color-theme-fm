import React from "react";

const SearchBar = (props) => {
  return (
    <div className=''>
      <div className='p-4 w-full text-gray-600'>
        <input
          type='text'
          placeholder='Search for a country..'
          name='name'
          onChange={props.handleChange}
          className='rounded w-full p-2'
        />
        {/* <button type='submit' className='p-10' onClick={props.searchBtn}>
          Submit
        </button> */}
      </div>
    </div>
  );
};

export default SearchBar;
