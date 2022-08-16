import React from "react";
import slc from "./styled/App.module.scss"
import Menu from "./components/Menu";
import Self from "./pages/personalarea/Self";
import styled from "styled-components"
import { IoLogoGithub } from "react-icons/io"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CodeIcon, CogIcon, FolderOpenIcon, HomeIcon, IdentificationIcon, GlobeIcon } from "@heroicons/react/outline";
import Stata from "./components/Stata";
import Login from "./pages/register/Login";
import Logup from "./pages/register/Logup";
import { Pages } from "./pages";

const StyledApp = styled.div `
  width: 100%;
  min-height: 100vh;
  oveflow-x: hidden;
  display: flex;
  text-decoration: none;
`

function App() {
  const menuData = [
    {
      to: "/",
      title: "Home",
      completed: true,
      icon: <HomeIcon/>,
      id: 1
    },
    {
      to: "/Github",
      title: "GitHub",
      completed: false,
      icon: <IoLogoGithub/>,
      id: 2
    },
    {
      to: "/Projects",
      title: "Projects",
      completed: false,
      icon: <FolderOpenIcon/>,
      id: 3
    },
    {
      to: "/Countries",
      title: "Countries",
      completed: false,
      icon: <GlobeIcon/>,
      id: 4
    },
    {
      to: "/Settings",
      title: "Settings",
      completed: false,
      icon: <CogIcon/>,
      id: 5
    },
    {
      to: "/About",
      title: "About us",
      completed: false,
      icon: <CodeIcon/>,
      id: 6
    },
    {
      to: "/Contacts",
      title: "Contacts",
      completed: false,
      icon: <IdentificationIcon/>,
      id: 8
    },
  ]

  return (
    <BrowserRouter>
      <StyledApp>
        <Menu menuData={menuData} />
        <div className={slc.container}>
          <Stata />
          <Routes>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Logup />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/Personal/*" element={<Self />} />
          <Route path="/Github" element={<Pages.GitLink />} />
          <Route path="/Projects" element={<Pages.Projects />} />
          <Route path="/Countries/*" element={<Pages.Countries />} />
          <Route path="/Settings" element={<Pages.Settings />} />
          <Route path="/About" element={<Pages.About/>} />
          <Route path="/Contacts" element={<Pages.Contacts />} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
