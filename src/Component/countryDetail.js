import React, { useState } from "react";

const CountryDetail = (props) => {
  const {
    area,
    capital,
    currencies,
    demonym,
    flag,
    flags,
    languages,
    latlng,
    timezone,
    name,
    subregion,
    topLevelDomain,
    borders,
    population,
    region,
    nativeName,
  } = props.countryDetail;

 
  return (
    <div>
      <button className='p-4'>Back</button>
      <div className='text-gray-700 dark:text-white shadow-2xl'>
        <img src={flag} alt='' className='w-full' />
        <h1 className="font-bold text-left ">{name}</h1>
        <ul className='flex flex-col justify-center leading-6'>
          <li>Native Name: {nativeName}</li>
          <li>Population: {population.toLocaleString()}</li>
          <li>Region: {region}</li>
          <li>Sub Region: {subregion}</li>
          <li>Capital: Brussels</li>
        </ul>
        <ul className='p-4 leading-6'>
          <li>Top Level Domain: {topLevelDomain}</li>
          <li className='flex px-2'>
            Currencies:{" "}
            {currencies.map((cash) => {
              return (
                <ul className='flex '>
                  <li>{cash.name}</li>
                  <li>{cash.symbol}</li>
                </ul>
              );
            })}
          </li>
          <li className='flex px-2'>
            Languages:{" "}
            {languages.map((lang) => {
              return (
                <ul className='flex'>
                  <li className='mx-2'>{lang.name},</li>
                  <li className='mx-2'>{lang.nativeName},</li>
                </ul>
              );
            })}
          </li>
        </ul>

        <h2>Border Countries</h2>
      </div>
    </div>
  );
};

export default CountryDetail;
