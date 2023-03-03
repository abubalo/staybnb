import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import ProfileMenu from "./ProfileMenu"


const Layout = () => {
  const [activeMenu, setMenuActive] = useState(false)
  return (
      <div className="">
        <Header 
        active={activeMenu}
        setActive={setMenuActive}
        />
        <ProfileMenu 
        active={activeMenu}
        />
        <Outlet />
      </div>
)}

export default Layout