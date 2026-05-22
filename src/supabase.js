import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ezkflqwbvxqbgaxjyumt.supabase.co'
const supabaseKey = 'sb_publishable_IYDNxcbSnRwvaEZGyY4w5g_bSLdJWBe'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)