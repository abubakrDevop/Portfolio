import React from "react";
import slc from "../Styled/App.module.scss"
import { LoginIcon, UserCircleIcon } from "@heroicons/react/outline"
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoLogoGithub, IoIosPlanet } from "react-icons/io"
import { Link } from "react-router-dom" 

function Stata() {
  const letter1 = {
    letter: "Hi,",
    id: 1
  } 
  const letter2 = {
    letter: "I'm S.A.SH",
    id: 1
  }
  const letter3 = {
    letter: "Web Developer",
    id: 1
  }
  
  return (
    <div className={slc.stataBox}>
      <div className={`${slc.stataBox_in}`}>
        <h1 className={slc.title}>CREAT</h1>
        <h1 className={slc.nameTitle}>
          {
            letter1.letter.split('').map((letter, id) => (
              <span key={id} className={`${slc.hover} ${slc.anime1}`}>{letter}</span>
            ))
          }
          <br />
          {
            letter2.letter.split('').map((letter, id) => (
              <span key={id} className={`${slc.hover} ${slc.anime2}`}>{letter}</span>
            ))
          }
          <br />
          {
            letter3.letter.split('').map((letter, id) => (
              <span key={id} className={`${slc.hover} ${slc.anime3}`}>{letter}</span>
            ))
          }
        </h1>
        <div className={slc.box}>
          <h1 className={slc.text}>WORDS</h1>
          <h1 className={slc.text}>WORKS</h1>
          <h1 className={slc.text}>TEAM</h1>
          <h1 className={slc.text}>FIND US</h1>
          <p className={slc.text}>Made up in 2022 <IoIosPlanet className={slc.icon} /> </p>
        </div>
        <div className={slc.socialMedia}>
          <a href="https://www.facebook.com/profile.php?id=100034252938811"><IoLogoFacebook className={slc.icons} /></a>
          <a href="https://www.instagram.com/sulayman0vv_1_/"><IoLogoInstagram className={slc.icons} /></a>
          <a href="https://twitter.com"><IoLogoTwitter className={slc.icons} /></a>
          <a href="https://github.com/abubakrDevop"><IoLogoGithub className={slc.icons} /></a>
        </div>

        {
          localStorage.getItem('localId') ? 
          <Link to={"/Personal"} className={slc.auth}>
            Profil <UserCircleIcon className={slc.icon} />
          </Link> : 
          <Link to={"SignIn"} className={slc.auth}> 
            Login <LoginIcon className={slc.icon} />
          </Link> 
        }

      </div>
    </div>
  )
}

export default Stata
