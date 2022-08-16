import React from 'react'
import slc from "./styled/Cards.module.scss"
import { useParams } from "react-router-dom"
import axios from "axios"
import Regions from './Regions'

const Cards = () => {
  const [data, setData] = React.useState(null)

  const {continets} = useParams()

  React.useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/region/${continets}`)
      .then(res => {
        setData(res.data)
      })
  }, [continets])

  return (
    <main className={slc.main}>
      <h1 className={slc.regionTitle}>{continets}'s Rigions</h1>
      <div className={slc.cardBox}>
        {
          data?.slice(0, 1).map(item => <Regions data={data} />)
        }
      </div>
    </main>
  )
}

export default Cards

