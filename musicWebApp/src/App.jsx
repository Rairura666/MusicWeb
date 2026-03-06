import { Footer } from "./Footer"
import { Header } from "./Header"
import { Menu } from "./Menu"

function App() {

  return (
    <div className="appWrapper">
      <Menu></Menu>
      <div className="container">
        <div className="content">
             <Header></Header>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
