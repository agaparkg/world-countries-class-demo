import React from 'react'

export default function SingleCountry(props) {
  const { flags, name, capital, population } = props.propsCountry;
  return (
    <div className="single-country">
      <img src={flags.png} alt="country flag" />
      <div><strong>{name.common}</strong></div>
      <div><b>Cap:</b> {capital ? capital[0] : <strong style={{color: "red"}}>None</strong>}</div>
      <div><b>Pop:</b> {population}</div>
    </div>
  )
}
