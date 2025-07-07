import Playlist, { PlaylistMusic } from "@/entities/Playlist"
import Music from "@/entities/Music"

export interface IPlaylistsRepository {
  create(playlist: Playlist): Promise<void>,
  addMusic(music: PlaylistMusic): Promise<void>,
  removeMusic(playlistId: string, musicId: string): Promise<void>,
  findMusicById(playlistId: string, musicId: string): Promise<Music | undefined>,
  listMusics(playlistId: string): Promise<Music[]>,
  list(userId: string): Promise<Music[]>
}