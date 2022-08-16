import React from "react";
import { NavLink } from "react-router-dom"
import slc from "../styled/MenuItems.module.scss"

function MenuItems(props) {
  return (
    <NavLink 
      to={props.to} 
      className={({ isActive }) => isActive ? `${slc.completed} ${slc.link}` : slc.linkBox}>
      <p className={slc.icon}>{props.icon}</p>
      <p className={`${slc.text} ${props.active && slc.textActive}`}>{props.title}</p>
    </NavLink>
  )
}

export default MenuItems