im
import quemSomos from "./components/pages/QuemSomos"
import Home from "./components/pages/Home"
import "./App.css"
import { Route } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<home />} />
      <Route path="quem-somos" element={<quemSomos />} />
      <Route path="/" element={<Page404 />} />



    </Routes>
  )
}

export default App