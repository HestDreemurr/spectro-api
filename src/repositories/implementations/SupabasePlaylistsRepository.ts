import { IPlaylistsRepository } from "../IPlaylistsRepository"
import Playlist, { PlaylistMusic } from "@/entities/Playlist"
import Music from "@/entities/Music"
import { supabase } from "./supabase"

export class SupabasePlaylistsRepository implements IPlaylistsRepository {
  async create(playlist: Playlist): Promise<void> {
    const { error } = await supabase
      .from("playlists")
      .insert(playlist)
      
    if (error) throw error
  }
  
  async addMusic(music: PlaylistMusic): Promise<void> {
    const { error } = await supabase
      .from("playlist_musics")
      .insert(music)
      
    if (error) throw error
  }
  
  async findMusicById(playlistId: string, musicId: string): Promise<Music> {
    const { data, error } = await supabase
      .from("playlist_musics")
      .select()
      .eq("playlist_id", playlistId)
      .eq("music_id", musicId)
      
    if (error) throw error 
    
    return data[0]
  }
  
  async listMusics(playlistId: string): Promise<Music[]> {
    const { data, error } = await supabase
      .from("playlist_musics")
      .select("musics(*)")
      .eq("playlist_id", playlistId)
      
    if (error) throw error
    
    return data.map(music => music.musics)
  }
  
  async list(userId: string): Promise<Music[]> {
    const { data, error } = await supabase
      .from("playlists")
      .select()
      .eq("user_id", userId)
      
    if (error) throw error
    
    return data
  }
  
  async removeMusic(playlistId: string, musicId: string): Promise<void> {
    const { error } = await supabase
      .from("playlist_musics")
      .delete()
      .eq("playlist_id", playlistId)
      .eq("music_id", musicId)
      
    if (error) throw error
  }
}