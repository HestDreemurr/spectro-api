import { IPlaylistsRepository } from "@/repositories/IPlaylistsRepository"
import { IAddMusicRequestDTO } from "./AddMusicDTO"
import { PlaylistMusic } from "@/entities/Playlist"

export class AddMusicUseCase {
  constructor(
    private playlistsRepository: IPlaylistsRepository
  ) {}
  
  async execute(data: IAddMusicRequestDTO) {
    const musicAlreadyInPlaylist = await this.playlistsRepository.findMusicById(data.playlist_id, data.music_id)
    
    if (musicAlreadyInPlaylist) {
      throw new Error("A música já está na Playlist.")
    }
    
    const music = new PlaylistMusic(data)
    
    await this.playlistsRepository.addMusic(music)
  }
}