import Music from "../../entities/Music"
import { supabase } from "./supabase"
import { IMusicsRepository, File } from "../IMusicsRepository"

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
      .textSearch("title", query)
      
    if (error) throw error
    
    return data
  }
}