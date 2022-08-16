import React from 'react'
import slc from './styled/GitLink.module.scss'
import { IoLogoGithub } from 'react-icons/io'

function GitLink() { 
  return (
    <div className={slc.gitContainer}>
      <div className={slc.gitBox}>
        <h1 className={slc.title}>Welcome to my GitHub</h1>
        <IoLogoGithub className={slc.icon} />
        <a href="https://github.com/abubakrDevop" className={slc.link}>
          <button className={slc.button}>Go to GitHub</button>
        </a>
      </div> 
    </div>
  )
}

export default GitLink
