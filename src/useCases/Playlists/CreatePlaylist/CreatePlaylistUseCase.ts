import { IPlaylistsRepository } from "@/repositories/IPlaylistsRepository"
import { ICreatePlaylistRequestDTO } from "./CreatePlaylistDTO"
import Playlist from "@/entities/Playlist"

export class CreatePlaylistUseCase {
  constructor(
    private playlistsRepository: IPlaylistsRepository
  ) {}
  
  async execute(data: ICreatePlaylistRequestDTO) {
    const playlist = new Playlist(data)
    
    await this.playlistsRepository.create(playlist)
  }
}