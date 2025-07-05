import Music from "../../entities/Music"
import { supabase } from "./supabase"
import { IMusicsRepository, File, Like } from "../IMusicsRepository"

export class SupabaseMusicsRepository implements IMusicsRepository {
  async create(music: Music): Promise<void> {
    const { error } = await supabase
      .from("musics")
      .insert(music)
      
    if (error) throw error
  }
  
  async upload(music: File): Promise<string> {
    const { error } = await supabase.storage
      .from("musics")
      .upload(`uploads/${music.originalname}`, music.buffer, {
        contentType: music.mimetype,
        upsert: false
      })
      
    if (error) throw error
    
    const { data } = supabase.storage
      .from("musics")
      .getPublicUrl(`uploads/${music.originalname}`)
      
    return data.publicUrl
  }
  
  async search(query: string): Promise<Music[]> {
    const { data, error } = await supabase
      .from("musics")
      .select()
      .ilike("title", `%${query}%`)
      
    if (error) throw error
    
    return data
  }
  
  async getUserMusics(userId: string): Promise<Music[]> {
    const { data, error } = await supabase
      .from("musics")
      .select()
      .eq("user_id", userId)
      
    if (error) throw error
    
    return data
  }
  
  async list(): Promise<Music[]> {
    const { data, error } = await supabase
      .from("musics")
      .select()
      .limit(5)
      
    if (error) throw error
    
    return data
  }
  
  async like(like: Like): Promise<void> {
    const { error } = await supabase
      .from("likes")
      .insert(like)
      
    if (error) throw error
  }
  
  async listLikedMusics(userId: string): Promise<Music[]> {
    const { data, error } = await supabase
      .from("likes")
      .select("musics(*)")
      .eq("user_id", userId)
      
    if (error) throw error
    
    return data.map(music => music.musics)
  }
}