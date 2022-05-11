import React from "react";

const SearchBar = (props) => {
  const searchSubmit = (e) => {
    console.log("THIS IS SEARCH", e);
    // return props.handleSubmit()
  };
  return (
    <div>
      <form onSubmit={searchSubmit}>
        <input type='text' placeholder='Search for a country..' />
        <button type='submit' className='p-10'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
