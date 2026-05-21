export default function Hero() {
  return (
    <section className="hero">

      <div className="container hero-grid">

        {/* LEFT */}

        <div className="hero-left">

          <div className="tag">
            🚀 Premium Digital Marketplace
          </div>

          <h1>
            Sell &
            <span> Download </span>
            Digital Products Instantly
          </h1>

          <p>
            Professional e-books, templates, guides, PDFs,
            Notion packs, UI kits, presets and premium
            downloadable digital products.
          </p>

          <div className="hero-buttons">

            <a href="/products" className="primary-btn">
              Explore Products
            </a>

           
          </div>

          <div className="hero-stats">

            <div className="stat-box">
              <h3>25K+</h3>
              <span>Downloads</span>
            </div>

            <div className="stat-box">
              <h3>4.9★</h3>
              <span>Customer Rating</span>
            </div>

            <div className="stat-box">
              <h3>150+</h3>
              <span>Digital Products</span>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <div className="hero-image-wrapper">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="ebook"
              className="hero-main-image"
            />

            {/* FLOAT CARD 1 */}

            <div className="floating-card top-card">

              <div>
                <small>Best Seller</small>
                <h4>Business E-Book</h4>
              </div>

              <span>₹499</span>

            </div>

            {/* FLOAT CARD 2 */}

            <div className="floating-card bottom-card">

              <div>
                <small>Instant Access</small>
                <h4>Download Ready</h4>
              </div>

              <span>⚡</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}