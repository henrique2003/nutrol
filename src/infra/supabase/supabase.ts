import { createClient } from "@supabase/supabase-js";

export class SupabaseAuth {
  private static instance: ReturnType<typeof createClient>;

  static getInstance() {
    if (!SupabaseAuth.instance) {
      SupabaseAuth.instance = createClient(
        process.env.EXPO_PUBLIC_SUPABASE_URL!,
        process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!,
        {
          auth: {
            persistSession: true,
            detectSessionInUrl: false,
          },
        }
      );
    }
    return SupabaseAuth.instance;
  }
}

export const supabase = SupabaseAuth.getInstance();