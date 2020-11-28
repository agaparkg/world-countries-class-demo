import React from 'react'

export default function SingleCountry(props) {
  const { flag, name, capital, population} = props.propsCountry;
  return (
    <div className="single-country">
      <img src={flag} alt="country flag" />
      <div><strong>{name}</strong></div>
      <div>Cap: {capital}</div>
      <div>Pop: {population}</div>
    </div>
  )
}
