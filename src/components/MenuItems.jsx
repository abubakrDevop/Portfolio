import React from "react";
import { Link, NavLink } from "react-router-dom"
import slc from "../styled/MenuItems.module.scss"

function MenuItems(props) {
  const [isCompleted, setCompleted] = React.useState(props.completed)

  function handleComlete() {
    setCompleted(prev => !prev)
  }

  return (
    <NavLink 
      to={props.to} 
      // className={`${slc.link} ${isCompleted && slc.completed}`} 
      className={({ isActive }) => isActive ? `${slc.completed} ${slc.link}` : slc.link}
      onClick={handleComlete}
    >
      <p className={slc.icon}>{props.icon}</p>
      <p className={`${slc.text} ${props.active && slc.textActive}`}>{props.title}</p>
    </NavLink>
  )
}

export default MenuItems