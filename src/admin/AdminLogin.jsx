import './admin.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

export default function AdminLogin(){

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin(e){

    e.preventDefault()

    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if(error){
      setError(error.message)
      setLoading(false)
      return
    }

    navigate('/admin/dashboard')

  }

  return(

    <section className="admin-login-page">

      <div className="admin-login-box">

        <h1>Admin Login</h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button type="submit">
            {
              loading
              ? 'Logging in...'
              : 'Login'
            }
          </button>

        </form>

      </div>

    </section>

  )
}