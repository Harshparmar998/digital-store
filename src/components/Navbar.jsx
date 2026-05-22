import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function Navbar() {

  const location = useLocation()

  return (

    <nav className="navbar">

      <div className="container nav-wrapper">

        {/* LOGO */}

        <Link
          to="/"
          className="logo"
        >
          Nexora
        </Link>

        {/* LINKS */}

        <div className="nav-links">

          {/* PRODUCTS */}

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

          {/* FEATURES */}

          <HashLink smooth to="/#features">
            Features
          </HashLink>

          {/* REVIEWS */}

          <HashLink smooth to="/#reviews">
            Reviews
          </HashLink>

        </div>

      </div>

    </nav>

  )
}