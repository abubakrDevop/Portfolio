import React from "react";
import slc from "./styled/Countrie.module.scss"
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/outline"
import { Link, Routes, Route } from "react-router-dom"
import Cards from "./Cards";
import axios from "axios"
import Loader from "../../components/Loader";

function Countries() {
  const navs = [
    {
      to: "/Countries",
      title: "All",
      id: 0,
      active: true
    },
    {
      to: "Americas",
      title: "Americas",
      id: 1,
      active: false
    },
    {
      to: "Europe",
      title: "Europe",
      id: 2,
      active: false
    },
    {
      to: "Ociania",
      title: "Ociania",
      id: 3,
      active: false
    },
    {
      to: "Asia",
      title: "Asia",
      id: 4,
      active: false
    },
    {
      to: "Africa",
      title: "Africa",
      id: 5,
      active: false
    },
  ]

  const [isActive, setActive] = React.useState(false)
  const [activeNav, setActiveNav] = React.useState("")
  const [data, setData] = React.useState(null)
  const [searchValue, setSearchValue] = React.useState("")

  React.useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`)
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
  }, [])

  function handleActive() {
    setActive(prev => !prev)
  }

  const searchInput = (value) => {
    setSearchValue(value)

    axios.get(`https://restcountries.com/v3.1/name/${value}`)
      .then(res => {
        setData(res.data)
      })
  }

  if (!data) return ( <Loader /> )
  return (
    <div className={slc.box}>

      <div className={slc.searchBox}>
        <input type="search" 
          placeholder="Search..." 
          className={slc.input} 
          value={searchValue}
          onChange={e => searchInput(e.target.value)}
        />
        <SearchIcon className={slc.icon}/>
      </div>

      <nav className={`${slc.nav} ${isActive && slc.navActive}`} onClick={handleActive}>
        <section className={slc.section}>
          <p>Categories</p>
          <ChevronDownIcon className={`${slc.icon} ${isActive && slc.iconActive}`}/>
        </section>
        <ul className={`${slc.ul} ${isActive && slc.ulActive}`}>
          {
            navs.map(({to, id, title, active}) => (
              <li key={id} className={slc.li}>
                <Link 
                  to={to} 
                  className={slc.link} 
                  onClick={() => setActiveNav(active)}>
                    {title}
                  </Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <div className={`${slc.countries} ${activeNav === false && slc.activeNav}`}>
        {
          data?.slice(0, 51).map(item => (
            <div key={item.area} className={slc.card}>
              <p className={slc.cioc}> {item.cioc} </p>
              <img src={item.flags.png} alt="Herb" className={slc.image} />
              <h1 className={slc.headTitle}> {item.name.common} </h1>
              <img src={item.coatOfArms.png} alt="" className={slc.arm} />
              <p className={slc.title}>Capital of the Country: {item.capital}</p>
              <p className={slc.title}>Region: {item.region}</p>
              <p className={slc.title}>Timezones: {item.timezones}</p>
              <p className={slc.title}>Population: {item.population}</p>
            </div>
          ))
        }
      </div>
      <Routes>
        <Route path="/:continets" element={<Cards/>}/>
      </Routes>
    </div>
  )
}

export default Countries