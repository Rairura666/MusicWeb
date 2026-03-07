import { Router } from "./router/Router"
import { HomePage } from "./pages/HomePage"
import { DiscoverPage } from "./pages/DiscoverPage"
import { MainLayout } from "./MainLayout"

function App() {

const routes = {
  "/": HomePage,
  "/discover": DiscoverPage,
  "*": () => <div>404 Page not found</div>
}

  return (
    <MainLayout page={ <Router routes = {routes}/>}/>
  )
}

export default App
