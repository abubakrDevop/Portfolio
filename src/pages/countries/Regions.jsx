import React from 'react'
import slc from "./styled/Cards.module.scss"

function Regions({data}) {
  return (
    <div className={slc.cardBox}>
      {
        data.slice(0, 51).map(item => (
          <div key={item.area} className={slc.card}>
            <p className={slc.cioc}> {item.cioc} </p>
            <img src={item.flags.png} alt="Herb" className={slc.image} />
            <h1 className={slc.headTitle}> {item.name.common} </h1>
            <img src={item.coatOfArms.png} alt="" className={slc.arm} />
            <p className={slc.title}>Capital of the Country: {item.capital}</p>
            <p className={slc.title}>Region: {item.region}</p>
            <p className={slc.title}>Timezones: {item.timezones}</p>
            <p className={slc.title}>Population: {item.population}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Regions