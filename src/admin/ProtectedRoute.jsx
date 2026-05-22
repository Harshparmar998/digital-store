import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { supabase } from '../supabase'

export default function ProtectedRoute({ children }){

  const [loading, setLoading] = useState(true)
  const [session, setSession] = useState(null)

  useEffect(() => {

    async function checkSession(){

      const {
        data: { session }
      } = await supabase.auth.getSession()

      setSession(session)
      setLoading(false)

    }

    checkSession()

  }, [])

  if(loading){
    return <h2>Loading...</h2>
  }

  if(!session){
    return <Navigate to="/admin" />
  }

  return children

}