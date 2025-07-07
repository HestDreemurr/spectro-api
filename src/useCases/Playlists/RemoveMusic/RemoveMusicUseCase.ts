import { IPlaylistsRepository } from "@/repositories/IPlaylistsRepository"
import { IRemoveMusicRequestDTO } from "./RemoveMusicDTO"

export class RemoveMusicUseCase {
  constructor(
    private playlistsRepository: IPlaylistsRepository
  ) {}
  
  async execute(data: IRemoveMusicRequestDTO) {
    await this.playlistsRepository.removeMusic(data.playlist_id, data.music_id)
  }
}