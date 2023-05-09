import CategoriesMenu from '../components/CategoriesMenu/CategoriesMenu'
import Navbar from '../components/Navbar/Navbar'
import SortSection from '../components/SortSection/SortSection'
import './Home.css'

const Home = () => {
  return (
    <div className="main">
      <Navbar />
      <SortSection />
      <CategoriesMenu />
    </div>
  )
}

export default Home