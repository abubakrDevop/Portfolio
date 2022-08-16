import React from "react";
import slc from "../styled/Loader.module.scss"

function Loader() {
  return (
    <div className={slc.container}>
      <div className={slc.lds_ripple}>
        <div className={slc.div}></div>
        <div className={slc.div}></div>
      </div>
      <h2 className={slc.title}>Loading please wait...</h2>
    </div>
  )
}

export default Loader