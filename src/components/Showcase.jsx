export default function Showcase() {
  return (
    <section className="showcase">

      <div className="container">

        <div className="showcase-grid">

          {/* LEFT CARD */}

          <div className="showcase-card large-card">

            <div className="showcase-content">

              <span>Premium Collection</span>

              <h2>
                High Quality Digital Products
              </h2>

              <p>
                Beautifully designed e-books, templates,
                UI kits, PDFs, creator tools and digital assets
                built for modern creators.
              </p>

              <a href="#products">
                Explore Collection
              </a>

            </div>

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
              alt="digital"
            />

          </div>

          {/* RIGHT SIDE */}

          <div className="showcase-right">

            <div className="mini-card">

              <div>

                <span>Instant Delivery</span>

                <h3>
                  Download Immediately After Payment
                </h3>

              </div>

              <div className="mini-icon">
                ⚡
              </div>

            </div>

            <div className="mini-card">

              <div>

                <span>Secure Payment</span>

                <h3>
                  Razorpay & UPI Payment Support
                </h3>

              </div>

              <div className="mini-icon">
                🔒
              </div>

            </div>

            <div className="mini-card">

              <div>

                <span>Lifetime Access</span>

                <h3>
                  Access Your Products Anytime
                </h3>

              </div>

              <div className="mini-icon">
                🚀
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}