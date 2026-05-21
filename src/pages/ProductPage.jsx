import { useParams, Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import products from '../data/products'

export default function ProductPage(){

  const { id } = useParams()

  const product = products.find(
    item => item.id === Number(id)
  )

  if(!product){
    return(
      <>
        <Navbar />

        <div className="not-found">
          <h1>Product Not Found</h1>
        </div>

        <Footer />
      </>
    )
  }

  return(
    <>

      <Navbar />

      <section className="premium-product-page">

        <div className="container">

          {/* TOP BAR */}

          <div className="product-topbar">

            <Link to="/" className="back-link">
              ← Back to Store
            </Link>

            <div className="product-rating">
              ⭐ 4.9 Rating
            </div>

          </div>

          {/* MAIN GRID */}

          <div className="premium-product-grid">

            {/* LEFT */}

            <div className="product-gallery-card">

              <div className="gallery-badge">
                Best Seller
              </div>

              <img
                src={product.image}
                alt={product.title}
                className="premium-product-image"
              />

              <div className="gallery-footer">

                <div>
                  <small>Instant Access</small>
                  <h4>Digital Download</h4>
                </div>

                <div className="gallery-price">
                  {product.price}
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="product-details-card">

              <span className="product-category">
                Premium Digital Product
              </span>

              <h1>
                {product.title}
              </h1>

              <p>
                {product.description}
                <br /><br />
                Access premium quality digital resources designed
                for creators, entrepreneurs and professionals.
                Instant download after successful payment.
              </p>

              {/* STATS */}

              <div className="product-stats-grid">

                <div className="product-stat-box">
                  <h3>25K+</h3>
                  <span>Downloads</span>
                </div>

                <div className="product-stat-box">
                  <h3>4.9★</h3>
                  <span>Rating</span>
                </div>

                <div className="product-stat-box">
                  <h3>24/7</h3>
                  <span>Access</span>
                </div>

              </div>

              {/* FEATURES */}

              <div className="premium-features-box">

                <div className="premium-feature-item">
                  <span>✓</span>
                  Instant Download After Payment
                </div>

                <div className="premium-feature-item">
                  <span>✓</span>
                  Lifetime Product Access
                </div>

                <div className="premium-feature-item">
                  <span>✓</span>
                  Mobile & Desktop Friendly
                </div>

                <div className="premium-feature-item">
                  <span>✓</span>
                  Premium High Quality Files
                </div>

              </div>

              {/* PURCHASE */}

              <div className="purchase-card">

                <div className="purchase-left">

                  <small>One-Time Purchase</small>

                  <h2>{product.price}</h2>

                  <span>No Subscription Required</span>

                </div>

                <div className="purchase-right">

                  <div className="secure-badge">
                    🔒 Secure Checkout
                  </div>

                  <a
                    href="YOUR_PAYMENT_LINK"
                    className="premium-buy-btn"
                  >
                    Buy Now
                  </a>

                </div>

              </div>

              {/* TRUST */}

              <div className="trust-row">

                <div className="trust-item">
                  ⚡ Instant Delivery
                </div>

                <div className="trust-item">
                  🔐 Safe Payment
                </div>

                <div className="trust-item">
                  ⭐ Premium Quality
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  )
}