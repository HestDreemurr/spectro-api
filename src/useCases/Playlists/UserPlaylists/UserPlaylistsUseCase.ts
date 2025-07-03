import { IPlaylistsRepository } from "@/repositories/IPlaylistsRepository"
import { IUserPlaylistsRequestDTO } from "./UserPlaylistsDTO"

export class UserPlaylistsUseCase {
  constructor(
    private playlistsRepository: IPlaylistsRepository
  ) {}
  
  async execute(data: IUserPlaylistsRequestDTO) {
    const playlists = await this.playlistsRepository.list(data.userId)
    
    return playlists
  }
}