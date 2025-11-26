import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import { supabase } from '../../supabase/supabase'
import { UseGoogleAuthResponse } from './types'

WebBrowser.maybeCompleteAuthSession()

export function useGoogleAuth(): UseGoogleAuthResponse {
  const [request,, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_GOOGLE_EXPO_ID,
  })

  async function signInWithGoogle() {
    const result = await promptAsync()

    if (result?.type !== 'success') return null

    const { idToken } = result.authentication!

    if (!idToken) {
      return null
    }
    
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: idToken,
    })

    if (error) {
      return null
    }

    return data.user
  }

  return { request, signInWithGoogle }
}
