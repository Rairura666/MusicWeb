
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Menu } from "./Menu"

export const MainLayout = ({page}) => {

    return (
        <div className="appWrapper">
            <Menu></Menu>
            <div className="container">
                <div className="content">
                    <Header></Header>
                    {page}
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}
