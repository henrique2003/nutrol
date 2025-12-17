import { Database } from "@/supabase/types/nutrol.types";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

export class SupabaseAuth {
  private static instance: ReturnType<typeof createClient<Database>>;

  static getInstance(): SupabaseClient<Database> {
    if (!SupabaseAuth.instance) {
      SupabaseAuth.instance = createClient<Database>(
        process.env.EXPO_PUBLIC_SUPABASE_URL!,
        process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!,
        {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: false,
          },
        },
      );
    }
    return SupabaseAuth.instance;
  }
}

export const supabase = SupabaseAuth.getInstance();