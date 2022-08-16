import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom"
import { LogoutIcon } from "@heroicons/react/outline"
import Editer from "./Editer";
import slc from "./styled/Self.module.scss"
import RegInfo from "./RegInfo";

function Self() { 
  const navigate = useNavigate()

  const [data, setData] = React.useState(JSON.parse(localStorage.getItem('data')))

  const [{ image, firstName, surName, status }] = data 

  function handleRemove() {
    localStorage.removeItem('localId')
    window.location.reload()
    navigate('/')
  }

  if (!localStorage.getItem('localId')) {
    return (
        <RegInfo />
    )
  }

  return (
    <div className={slc.box}>
      <div className={slc.box_in}>

        {
          localStorage.getItem('localId') ? 
          <span className={slc.logout} onClick={handleRemove}>
            Logout <LogoutIcon className={slc.icon} />
          </span> : 
          <span></span>
        }

        <p className={slc.title}>PERSONAL AREA</p>
        <img src={`${image}`} alt="" className={slc.image} />
        <h1 className={slc.nameTitle}>{`${firstName}`} {`${surName}`}</h1>
        <p className={slc.status}>{`${status}`}</p>
        <section className={slc.section}>
          <p className={slc.text}><span>0</span> Publications</p>
          <p className={slc.text}><span>0</span> Followers</p>
          <p className={slc.text}><span>0</span> Follows</p>
        </section>

        <Link to={'editor'}>
          <button className={slc.button}>Edit profile</button>
        </Link>
        
      </div>
      <Routes>
        <Route path={"editor"} element={<Editer setData={setData} />} />
      </Routes>
    </div>
  )
}

export default Self