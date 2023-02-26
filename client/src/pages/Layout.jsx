import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import ProfileMenu from "../components/ProfileMenu"


const Layout = () => {
  return (
      <div className="">
        <Header />
        <ProfileMenu />
        <Outlet />
      </div>
)}

export default Layout