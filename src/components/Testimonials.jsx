export default function Testimonials(){

  const reviews = [
    'Amazing quality digital products and instant delivery.',
    'Beautiful templates and premium UI design resources.',
    'Best platform for creators and online business owners.'
  ]

  return(
    <section className="reviews" id="reviews">

      <div className="container">

        <div className="section-heading">
          <span>Testimonials</span>
          <h2>What Customers Say</h2>
        </div>

        <div className="reviews-grid">

          {reviews.map((item,index)=>(

            <div className="review-card" key={index}>
              <p>{item}</p>
              <h4>★★★★★ Customer</h4>
            </div>

          ))}

        </div>

      </div>

    </section>
  )
}