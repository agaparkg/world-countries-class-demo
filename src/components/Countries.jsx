import React from 'react';
import SingleCountry from './SingleCountry.jsx';

const Countries = (props) => {
  const { countries, activePage, itemsPerPage } = props;
  const start = (activePage - 1) * itemsPerPage;
  const end = activePage * itemsPerPage;
  const slicedData = countries.slice(start, end);
  return (
    <div className='countries'>
      {slicedData.map((country, ind) => {
        return (
          <div key={ind}>
            <SingleCountry propsCountry={country} />
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
