import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Showcase from './components/Showcase'
import CTA from './components/CTA'
import Footer from './components/Footer'

import ProductPage from './pages/ProductPage'
import ProductsPage from './pages/ProductsPage'

function HomePage(){

  return(
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <Products />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default function App(){

  return(

    <Routes>

      {/* HOME */}

      <Route
        path="/"
        element={<HomePage />}
      />

      {/* ALL PRODUCTS */}

      <Route
        path="/products"
        element={<ProductsPage />}
      />

      {/* SINGLE PRODUCT */}

      <Route
        path="/product/:id"
        element={<ProductPage />}
      />

    </Routes>

  )
}