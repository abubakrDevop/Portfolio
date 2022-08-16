import React from 'react'
import slc from './styled/RegInfo.module.scss'
import { Link } from 'react-router-dom'

function RegInfo() {
  return (
    <div className={slc.regBox}>
      <h1 className={slc.title}>You are not logged in yet!</h1>
      <p className={slc.subtitle}>Please login account to see your profil</p>
      <Link to={"/"}>
        <button className={slc.button}>Back to home</button>
      </Link>
    </div>
  )
}

export default RegInfo 
