import { IPlaylistsRepository } from "../IPlaylistsRepository"
import Playlist from "@/entities/Playlist"
import { supabase } from "./supabase"

export class SupabasePlaylistsRepository implements IPlaylistsRepository {
  async create(playlist: Playlist): Promise<void> {
    const { error } = await supabase
      .from("playlists")
      .insert(playlist)
      
    if (error) throw error
  }
}