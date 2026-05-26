import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { supabase } from '../supabase'

export default function ProductPage() {

  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProduct()
  }, [id])

  async function fetchProduct() {

    setLoading(true)

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()

    if (data) {
      setProduct(data)
    }

    setLoading(false)
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="not-found">
          <h1>Loading Product...</h1>
        </div>
        <Footer />
      </>
    )
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="not-found">
          <h1>Product Not Found</h1>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <section className="premium-product-page">

        <div className="container">

          {/* TOP BAR */}
          <div className="product-topbar">

            <Link to="/products" className="back-link">
              ← Back to Store
            </Link>

            <div className="product-rating">
              ⭐ 4.9 Rating
            </div>

          </div>

          {/* MAIN GRID */}
          <div className="premium-product-grid">

            {/* LEFT SIDE */}
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
                  ₹{product.price}
                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="product-details-card">

              <span className="product-category">
                Premium Digital Product
              </span>

              <h1>{product.title}</h1>

              <p>
                {product.description}
                <br /><br />
                High-quality digital product designed for creators,
                entrepreneurs and professionals. Instant access after purchase.
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

                  <h2>₹{product.price}</h2>

                  <span>No Subscription Required</span>

                </div>

                <div className="purchase-right">

                  <div className="secure-badge">
                    🔒 Secure Checkout
                  </div>

                  {/* PAYMENT LINK (OPTIONAL SAFE) */}
                  {
                    product.payment_link ? (
                      <a
                        href={product.payment_link}
                        className="premium-buy-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Buy Now
                      </a>
                    ) : (
                      <button className="premium-buy-btn" disabled>
                        Coming Soon
                      </button>
                    )
                  }

                </div>

              </div>

              {/* TRUST */}
              <div className="trust-row">

                <div className="trust-item">⚡ Instant Delivery</div>
                <div className="trust-item">🔐 Safe Payment</div>
                <div className="trust-item">⭐ Premium Quality</div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}