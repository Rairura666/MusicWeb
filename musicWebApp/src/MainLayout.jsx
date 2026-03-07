import { Outlet } from "react-router-dom"
import { Footer } from "./assets/Footer"
import { Menu } from "./assets/Menu"

export const MainLayout = () => {
  return (
    <div className="appWrapper">
      <Menu></Menu>
      <div className="container">
        <div className="content">
             <Outlet/>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

