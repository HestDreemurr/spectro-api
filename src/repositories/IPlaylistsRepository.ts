import Playlist from "@/entities/Playlist"

export interface IPlaylistsRepository {
  create(playlist: Playlist): Promise<void>
}