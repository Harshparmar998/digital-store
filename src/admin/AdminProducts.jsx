import './admin.css'

import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

export default function AdminProducts() {

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)

  const [showForm, setShowForm] = useState(false)

  const [editingId, setEditingId] = useState(null)

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [paymentLink, setPaymentLink] = useState('')
  const [trending, setTrending] = useState(false)

  useEffect(() => {

    fetchProducts()

  }, [])

  async function fetchProducts() {

    setLoading(true)

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('id', { ascending: false })

    if (!error) {
      setProducts(data)
    }

    setLoading(false)

  }

  function resetForm() {

    setEditingId(null)

    setTitle('')
    setPrice('')
    setImage('')
    setDescription('')
    setPaymentLink('')
    setTrending(false)

  }

  function handleEdit(item) {

    setShowForm(true)

    setEditingId(item.id)

    setTitle(item.title || '')
    setPrice(item.price || '')
    setImage(item.image || '')
    setDescription(item.description || '')
    setPaymentLink(item.payment_link || '')
    setTrending(item.trending || false)

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

  }

  async function handleSubmit(e) {

    e.preventDefault()

    const productData = {
      title,
      price,
      image,
      description,
      payment_link: paymentLink,
      trending
    }

    if (editingId) {

      const { error } = await supabase
        .from('products')
        .update(productData)
        .eq('id', editingId)

      if (error) {
        console.log(error)
        return
      }

    } else {

      const { error } = await supabase
        .from('products')
        .insert([productData])

      if (error) {
        console.log(error)
        return
      }

    }

    resetForm()

    setShowForm(false)

    fetchProducts()

  }

  async function handleDelete(id) {

    const confirmDelete = window.confirm(
      'Delete this product?'
    )

    if (!confirmDelete) {
      return
    }

    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id)

    if (!error) {

      setProducts(
        products.filter((item) => item.id !== id)
      )

    }

  }

  if (loading) {

    return (
      <section className="admin-products-page">
        <h2 style={{ color: '#fff' }}>
          Loading Products...
        </h2>
      </section>
    )

  }

  return (

    <section className="admin-products-page">

      <div className="admin-products-container">

        <div className="admin-products-header">

          <div>

            <span>
              Admin Products
            </span>

            <h1>
              Product Management
            </h1>

          </div>

          <button
            className="add-product-btn"
            onClick={() => {
              resetForm()
              setShowForm(!showForm)
            }}
          >
            + Add Product
          </button>

        </div>

        {
          showForm && (

            <div className="admin-form-card">

              <h2>
                {
                  editingId
                    ? 'Edit Product'
                    : 'Add Product'
                }
              </h2>

              <form
                className="admin-product-form"
                onSubmit={handleSubmit}
              >

                <input
                  type="text"
                  placeholder="Product Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />

                <input
                  type="text"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />

                <input
                  type="text"
                  placeholder="Image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />

                <textarea
                  placeholder="Product Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="5"
                  required
                />

                <input
                  type="text"
                  placeholder="Payment Link"
                  value={paymentLink}
                  onChange={(e) => setPaymentLink(e.target.value)}
                  
                />

                <label className="stock-checkbox">

                  <input
                    type="checkbox"
                    checked={trending}
                    onChange={(e) => setTrending(e.target.checked)}
                  />

                  Trending Product

                </label>

                <div className="admin-form-buttons">

                  <button type="submit">
                    {
                      editingId
                        ? 'Update Product'
                        : 'Add Product'
                    }
                  </button>

                </div>

              </form>

            </div>

          )
        }

        <div className="admin-table-wrapper">

          <table className="admin-products-table">

            <thead>

              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Trending</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {products.map((item) => (

                <tr key={item.id}>

                  <td>
                    {item.id}
                  </td>

                  <td>

                    <img
                      src={item.image}
                      alt={item.title}
                      className="admin-product-image"
                    />

                  </td>

                  <td>
                    {item.title}
                  </td>

                  <td>
                    ₹{item.price}
                  </td>

                  <td>

                    <span
                      className={
                        item.trending
                          ? 'status-active'
                          : 'status-out'
                      }
                    >
                      {
                        item.trending
                          ? 'Trending'
                          : 'Normal'
                      }
                    </span>

                  </td>

                  <td>

                    <div className="admin-table-actions">

                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>

  )
}