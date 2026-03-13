import { MainLayout } from "./MainLayout"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from "./pages/HomePage";
import { DiscoverPage } from "./pages/DiscoverPage";
import { RandomArtistPage } from "./pages/RandomArtistPage";
import { RandomPlaylistPage } from "./pages/RandomPlaylistPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/albums" element={<RandomPlaylistPage />} />
          <Route path="/artists" element={<RandomArtistPage />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
