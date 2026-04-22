// Database Schema Concept for Supabase/PostgreSQL

export interface Proof {
  id: string;               // UUID
  client_id?: string;       // UUID (Optional FKey)
  type: 'uk_theory' | 'uk_practical' | 'uk_full';
  region: string;           // e.g., 'London'
  pass_date: string;        // ISO Date
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  published: boolean;
  created_at: string;       // Timestamp
}

export interface ProofMedia {
  id: string;               // UUID
  proof_id: string;         // FKey to Proof
  media_type: 'image' | 'video';
  file_url: string;         // URL to storage bucket
  thumbnail_url?: string;
  order: number;            // Display order
}

export interface Message {
  id: string;               // UUID
  name: string;
  phone: string;
  email: string;
  service_type: 'uk_theory' | 'uk_practical' | 'uk_full' | 'other';
  region: string;
  status: 'new' | 'read' | 'replied';
  created_at: string;       // Timestamp
}

export interface Client {
  id: string;               // UUID
  user_id?: string;         // Auth User UUID if authenticated
  full_name: string;
  email: string;
  phone: string;
  current_stage: 'none' | 'provisional' | 'theory_passed' | 'practical_ready';
  created_at: string;
}
