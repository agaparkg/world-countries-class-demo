import React from 'react';
import SingleCountry from "./SingleCountry.jsx"

const Countries = (props) => {
  const { countries, activePage, itemsPerPage } = props;
  const slicedData = countries.slice((activePage-1)*itemsPerPage, (activePage*itemsPerPage))
  return (
    <div className="countries">
      {
        slicedData.map((country,ind) => {
          return (
            <div key={ind}>
              <SingleCountry propsCountry={country}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Countries;