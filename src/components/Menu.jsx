import React from "react";
import { Link } from "react-router-dom"
import { FireIcon, ArrowRightIcon, } from "@heroicons/react/outline"
import { IoIosList, IoMdClose } from "react-icons/io"
import slc from "../styled/Menu.module.scss"
import MenuItems from "./MenuItems";

function Menu({menuData}) {
  const [isActive, setActive] = React.useState(false)

  const details = JSON.parse(localStorage.getItem('data'))

  const [{ firstName, surName, image }] = details 

  function handleAcive(props) {
    setActive(prev => !prev)
  }

  return (
    <div className={`${slc.menu} ${isActive && slc.activeMenu}`}>

      <span className={`${slc.circle} ${isActive && slc.activeIcon}`} onClick={handleAcive}>
        <ArrowRightIcon className={slc.openClose}/>
      </span>
      <span className={slc.menuIcons} onClick={handleAcive}>
        {
          isActive === false ? <IoIosList className={slc.menuItems}/> : <IoMdClose className={slc.menuItems}/>
        }
      </span>

      <div className={slc.logo}>
        <FireIcon className={slc.icon}/>
        <h1 className={`${slc.title} ${isActive && slc.hide}`}>CREATIVE TIM</h1>
      </div>

      <Link to={'/Personal'} className={slc.self}>
        <img src={image} alt="" className={slc.img}/>
        <p className={`${slc.titleName} ${isActive && slc.hide}`}>{firstName} {surName}</p>
      </Link>

      {
        menuData.map(item => <MenuItems active={isActive} key={item.id} {...item}/>)
      }

    </div>
  )
}

export default Menu

