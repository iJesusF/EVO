export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: { id:string; user_id:string | null; player_name:string; total_power:string; first_squad_power:string; vip_level:number; main_squad_type:string; best_heroes:string; timezone:string; availability:string; alliance_role:string; is_admin:boolean; notes:string; created_at:string; updated_at:string };
        Insert: Partial<Database['public']['Tables']['profiles']['Row']>;
        Update: Partial<Database['public']['Tables']['profiles']['Row']>;
      };
      orders: {
        Row: { id:string; title:string; priority:string; instructions:string; assigned_role:string; event_time:string; status:string; created_by:string | null; created_at:string };
        Insert: Partial<Database['public']['Tables']['orders']['Row']>;
        Update: Partial<Database['public']['Tables']['orders']['Row']>;
      };
      events: {
        Row: { id:string; title:string; event_type:string; importance:string; event_time:string; preparation:string; created_at:string };
        Insert: Partial<Database['public']['Tables']['events']['Row']>;
        Update: Partial<Database['public']['Tables']['events']['Row']>;
      };
    };
  };
};
