import "./App.css"

import Navbar from "./components/Navbar/Navbar"
import SortSection from "./components/SortSection/SortSection"
import CategoriesMenu from "./components/CategoriesMenu/CategoriesMenu"

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <SortSection />
      <CategoriesMenu />
    </div>
  )
}

export default App
