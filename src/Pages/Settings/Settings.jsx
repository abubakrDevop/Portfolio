import React from "react";
import slc from "./styled/Settings.module.scss"
import { IoIosSunny, IoIosMoon } from "react-icons/io"

function Settings(props) {
  const [active, setActive] = React.useState(false)

  function handleChange() {
    setActive(prev => !prev)
  }

  return (
    <div className={`${slc.settingsContainer} ${active && slc.invert}`}>
      <div className={slc.box}>
        <h1 className={slc.title}>Day | Night  Mode</h1>

        {
          active === false ? <IoIosMoon className={slc.icon} /> : <IoIosSunny className={slc.icon} />
        }

        <button className={slc.button} onClick={handleChange}>Change</button>
      </div>
    </div>
  )
}

export default Settings