import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FavoriteProvider } from "./context/FavoriteContext"


function App() {
  return (
    <FavoriteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </BrowserRouter>
    </FavoriteProvider>
  )
}

export default App