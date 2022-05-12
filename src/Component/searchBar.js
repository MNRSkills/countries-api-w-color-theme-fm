import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <form className='p-2 w-full text-gray-600' onSubmit={props.handleSubmit}>
        <input
          type='text'
          placeholder='Search for a country..'
          name='name'
          onChange={props.handleChange}
        />
        <button type='submit' className='p-10'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
