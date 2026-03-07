import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Menu } from "./Menu"

export const MainLayout = () => {
  return (
    <div className="appWrapper">
      <Menu></Menu>
      <div className="container">
        <div className="content">
             <Header></Header>
             <Outlet/>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

