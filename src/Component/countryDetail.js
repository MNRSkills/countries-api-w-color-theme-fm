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

  const bordered = borders.map((border, index) => {
    return <li className='shadow-2xl font-sm px-3 border-2'>{border},</li>;
  });

  const language = languages.map((lang) => {
    return (
      <ul className='flex' key={lang.key}>
        <li className='mx-2'>{lang.name},</li>
        <li className='mx-2'>{lang.nativeName},</li>
      </ul>
    );
  });

  const chetta = currencies.map((cash) => {
    return (
      <ul className='flex ' key={cash.key}>
        <li>{cash.name}</li>
        <li>{cash.symbol}</li>
      </ul>
    );
  });

  return (
    <div className='font-display'>
      <button className='p-4'>Back</button>
      <div className='text-gray-700 dark:text-white'>
        <img src={flag} alt='' className='w-full' />
        <h1 className='font-bold text-left py-6'>{name}</h1>
        <ul className='flex flex-col justify-center leading-6 py-5'>
          <li>
            <strong>Native Name:</strong> {nativeName}
          </li>
          <li>
            <strong>Population:</strong> {population.toLocaleString()}
          </li>
          <li>
            <strong>Region:</strong> {region}
          </li>
          <li>
            <strong>Sub Region</strong> {subregion}
          </li>
          <li>
            <strong>Capital</strong> {capital}
          </li>
        </ul>
        <ul className='p-4 leading-6'>
          <li>
            <strong>Top Level Domain:</strong> {topLevelDomain}
          </li>
          <li className='flex px-2'>
            <strong>Currencies:</strong> {chetta}
          </li>
          <li className='flex px-2'>
            <strong>Languages</strong> {language}
          </li>
        </ul>
        <strong>Border Countries:</strong>
        <ul className='flex gap-3 flex-wrap'>{bordered}</ul>
      </div>
    </div>
  );
};

export default CountryDetail;
