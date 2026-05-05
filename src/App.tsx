import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FavoriteProvider } from "./context/FavoriteContext"
import Home from "./pages/Home"


function App() {
  return (
    <FavoriteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </FavoriteProvider>
  )
}

export default App