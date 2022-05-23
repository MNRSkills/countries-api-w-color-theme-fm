import React from "react";

const Countries = (props) => {
  // console.log(props.country, "THIS IS PROPS FROM COUNTRY");

  const { name, population, region, capital, flag } = props.country;

  return (
    <div className='p-10'>
      <div className='grid grid-rows-2 shadow-xl border rounde-xl'>
        <div className='w-full'>
          <img src={flag} alt='flag goes here no dissrespect' />
        </div>
        <div className='p-5 dark:text-white'>
          <h1 className='font-bold text-xl'>{name}</h1>
          <ul className='py-2'>
            <li>
              <strong>Population:</strong>{population}
            </li>
            <li>
              <strong>Region:</strong> {region}
            </li>
            <li>
              <strong>Capital:</strong> {capital}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Countries;
