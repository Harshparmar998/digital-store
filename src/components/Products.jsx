import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { supabase } from '../supabase'

export default function Products(){

  const [products, setProducts] = useState([])

  useEffect(() => {

    async function getTrendingProducts(){

      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('trending', true)

      if(data){
        setProducts(data)
      }

      if(error){
        console.log(error)
      }

    }

    getTrendingProducts()

  }, [])

  return(

    <section className="products" id="products">

      <div className="container">

        <div className="section-heading">
          <span>Digital Products</span>
          <h2>Trending Products</h2>
        </div>

        <div className="products-grid">

          {products.map((item)=>(

            <Link
              to={`/product/${item.id}`}
              className="product-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="product-content">

                <h3>{item.title}</h3>

                <div className="product-bottom">

                  <h4>₹{item.price}</h4>

                  <span className="view-btn">
                    View Product
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  )
}