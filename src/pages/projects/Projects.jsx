import React from "react";
import slc from "./styled/Projects.module.scss"

function Projects() {
  return (
    <div className={slc.projectBox}>

      <div className={slc.projectBox_in}>
        <div className={`${slc.box} ${slc.anime1}`}>
          <h1 className={slc.projectsTitle}>TUNE - MUSIC</h1>
          <img src="./images/Tlogo.png" alt="" className={`${slc.image} ${slc.image1}`} />
          <p className={`${slc.info} ${slc.info1}`}>This project made in 2022 here there are HTML5 CSS3 JavaScript as soon as possible we add Music Api on another page. Also if you see here there are Merch page and Video page in future our project will become better :)</p>
          <button className={`${slc.button} ${slc.button1}`}>Visit site</button>
        </div>
        <div className={`${slc.box} ${slc.anime2}`}>
          <h1 className={slc.projectsTitle}>FARFETCH</h1>
          <img src="./images/icon_window.png" alt="" className={`${slc.image} ${slc.image2}`} />
          <p className={`${slc.info} ${slc.info2}`}>This project has HTML5 CSS3 JavaScript RestApi on head page you can see field of adding your own clothes and also add it to cart, Slider Register and Ligin page we trying to improve in future we'll add on this Web site more pages and settings</p>
          <button className={`${slc.button} ${slc.button2}`}>Visit site</button>
        </div>
        <div className={`${slc.box} ${slc.anime3}`}>
          <h1 className={slc.projectsTitle}>AMONG US RUN</h1>
          <img src="./images/among.gif" alt="" className={`${slc.image} ${slc.image3}`} />
          <p className={`${slc.info} ${slc.info3}`}>This is my first project do not judge me strictly :) if you open it you can play Amogs us Run</p>
          <button className={`${slc.button} ${slc.button2}`}>Visit site</button>
        </div>
      </div>

      <div className={slc.textBox}>
        <h1 className={slc.textTitle}>Projects with only JavaScript, RestApi, FireBase</h1>
        <p className={slc.textSubtitle}>Developed by Sulaimanov S.A.SH in 2022Ⓒ</p>
      </div>

    </div>
  )
}

export default Projects