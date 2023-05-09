import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-bar">
        <a href="">
          <img src="/logo.png" alt="NoteMovies" />
        </a>
      </div>
      <div className="right-bar">
        <Link to ='/login'>
          <button >Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
