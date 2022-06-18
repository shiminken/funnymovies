import { UserDetails } from '@/services/authentications/auth.type';
import { createClient } from '@supabase/supabase-js'

import { User } from '@supabase/supabase-auth-helpers/nextjs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl as string, supabaseAnonKey as string)

