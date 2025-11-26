import { User } from "@supabase/supabase-js"
import { GoogleAuthRequestConfig } from "expo-auth-session/providers/google"

export type UseGoogleAuthResponse = {
  request: GoogleAuthRequestConfig | null
  signInWithGoogle: () => Promise<User | null>
}