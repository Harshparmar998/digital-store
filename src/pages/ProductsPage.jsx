import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { supabase } from '../supabase'

export default function ProductsPage(){

  const [products, setProducts] = useState([])

  useEffect(() => {

    async function getProducts(){

      const { data, error } = await supabase
        .from('products')
        .select('*')

      if(data){
        setProducts(data)
      }

      if(error){
        console.log(error)
      }

    }

    getProducts()

  }, [])

  return(

    <>

      <Navbar />

      <section className="all-products-page">

        <div className="container">

          {/* HEADER */}

          <div className="products-page-header">

            <span>
              Premium Digital Store
            </span>

            <h1>
              Explore All Products
            </h1>

            <p>
              Discover premium digital products crafted
              for creators, entrepreneurs and professionals.
            </p>

          </div>

          {/* PRODUCTS */}

          <div className="all-products-grid">

            {products.map((item)=>(

              <Link
                to={`/product/${item.id}`}
                className="all-product-card"
                key={item.id}
              >

                <div className="all-product-image-wrapper">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="product-overlay-btn">
                    View Product
                  </div>

                </div>

                <div className="all-product-content">

                  <h3>
                    {item.title}
                  </h3>

                  <div className="all-product-bottom">

                    <span className="product-price">
                      {item.price}
                    </span>

                    <span className="product-rating-small">
                      ⭐ 4.9
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      <Footer />

    </>

  )
}