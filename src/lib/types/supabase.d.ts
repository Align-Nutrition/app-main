export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      business_client_invites: {
        Row: {
          business_id: string
          converted: boolean
          created_at: string
          custom_welcome_message: string | null
          email: string
          full_name: string
          id: number
          trainer_id: string
          user_id: string | null
        }
        Insert: {
          business_id: string
          converted?: boolean
          created_at?: string
          custom_welcome_message?: string | null
          email: string
          full_name: string
          id?: number
          trainer_id: string
          user_id?: string | null
        }
        Update: {
          business_id?: string
          converted?: boolean
          created_at?: string
          custom_welcome_message?: string | null
          email?: string
          full_name?: string
          id?: number
          trainer_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_client_invites_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_client_invites_trainer_id_fkey1"
            columns: ["trainer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_client_invites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      business_user_assessments: {
        Row: {
          business_id: string
          created_at: string
          date: string
          id: number
          user_id: string
        }
        Insert: {
          business_id?: string
          created_at?: string
          date: string
          id?: number
          user_id: string
        }
        Update: {
          business_id?: string
          created_at?: string
          date?: string
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_user_assessments_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_user_assessments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      business_users: {
        Row: {
          business_id: string
          created_at: string
          id: number
          role: Database["public"]["Enums"]["Business User Roles"]
          trainer_id: string | null
          user_id: string
        }
        Insert: {
          business_id?: string
          created_at?: string
          id?: number
          role?: Database["public"]["Enums"]["Business User Roles"]
          trainer_id?: string | null
          user_id: string
        }
        Update: {
          business_id?: string
          created_at?: string
          id?: number
          role?: Database["public"]["Enums"]["Business User Roles"]
          trainer_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_users_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_users_trainer_id_fkey1"
            columns: ["trainer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      businesses: {
        Row: {
          country: string | null
          created_at: string
          email: string | null
          google_play_store_url: string | null
          id: string
          ios_app_store_url: string | null
          logo: string | null
          name: string
          phone: string | null
          stripe_subscription_id: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          email?: string | null
          google_play_store_url?: string | null
          id?: string
          ios_app_store_url?: string | null
          logo?: string | null
          name: string
          phone?: string | null
          stripe_subscription_id?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string
          email?: string | null
          google_play_store_url?: string | null
          id?: string
          ios_app_store_url?: string | null
          logo?: string | null
          name?: string
          phone?: string | null
          stripe_subscription_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          birthday: string | null
          country: string | null
          full_name: string | null
          height_inches: number | null
          id: string
          phone: string | null
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          birthday?: string | null
          country?: string | null
          full_name?: string | null
          height_inches?: number | null
          id: string
          phone?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          birthday?: string | null
          country?: string | null
          full_name?: string | null
          height_inches?: number | null
          id?: string
          phone?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_preferences: {
        Row: {
          fitness_goal: Database["public"]["Enums"]["User Fitness Goal"]
          food_allergies: Database["public"]["Enums"]["Food Allergies"][] | null
          food_dislikes: Database["public"]["Enums"]["Common Foods"][] | null
          food_likes: Database["public"]["Enums"]["Common Foods"][] | null
          measurements:
            | Database["public"]["Enums"]["Body Measurements"][]
            | null
          unit_of_measurement: string | null
          user_id: string
        }
        Insert: {
          fitness_goal?: Database["public"]["Enums"]["User Fitness Goal"]
          food_allergies?:
            | Database["public"]["Enums"]["Food Allergies"][]
            | null
          food_dislikes?: Database["public"]["Enums"]["Common Foods"][] | null
          food_likes?: Database["public"]["Enums"]["Common Foods"][] | null
          measurements?:
            | Database["public"]["Enums"]["Body Measurements"][]
            | null
          unit_of_measurement?: string | null
          user_id: string
        }
        Update: {
          fitness_goal?: Database["public"]["Enums"]["User Fitness Goal"]
          food_allergies?:
            | Database["public"]["Enums"]["Food Allergies"][]
            | null
          food_dislikes?: Database["public"]["Enums"]["Common Foods"][] | null
          food_likes?: Database["public"]["Enums"]["Common Foods"][] | null
          measurements?:
            | Database["public"]["Enums"]["Body Measurements"][]
            | null
          unit_of_measurement?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_preferences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_id_from_auth_users: {
        Args: {
          lookup_email: string
        }
        Returns: {
          id: string
          email: string
        }[]
      }
    }
    Enums: {
      "Body Measurements":
        | "Body Fat"
        | "Weight"
        | "Neck"
        | "Chest"
        | "Bicep"
        | "Waist"
        | "Hips"
        | "Thigh"
        | "Calves"
      "Business User Roles":
        | "owner"
        | "admin"
        | "trainer"
        | "client"
        | "prospect"
      "Common Foods":
        | "Meat"
        | "Fish"
        | "Grains"
        | "Vegetables"
        | "Fruits"
        | "Dairy"
        | "Nuts"
        | "Seeds"
        | "Legumes"
        | "Processed foods"
      "Food Allergies":
        | "Peanut"
        | "Tree Nut"
        | "Soy"
        | "Dairy"
        | "Egg"
        | "Wheat"
        | "Gluten"
        | "Shellfish"
        | "Fish"
        | "Sesame"
      "User Fitness Goal":
        | "Weight Loss"
        | "Maintenance"
        | "Muscle Gain"
        | "Mass Gain"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
