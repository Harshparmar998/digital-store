import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){

  const location = useLocation()

  return(

    <nav className="navbar">

      <div className="container nav-wrapper">

        {/* LOGO */}

        <Link
          to="/"
          className="logo"
        >
          DigiStore
        </Link>

        {/* LINKS */}

        <div className="nav-links">

          <Link
            to="/products"
            className={
              location.pathname === "/products"
              ? "active-nav"
              : ""
            }
          >
            Products
          </Link>

          <a href="/#features">
            Features
          </a>

          <a href="/#reviews">
            Reviews
          </a>

        </div>

        {/* BUTTON */}

  

      </div>

    </nav>

  )
}