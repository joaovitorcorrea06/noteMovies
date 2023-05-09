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
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar
