import { IPlaylistsRepository } from "@/repositories/IPlaylistsRepository"
import { IListMusicsRequestDTO } from "./ListMusicsDTO"

export class ListMusicsUseCase {
  constructor(
    private playlistsRepository: IPlaylistsRepository
  ) {}
  
  async execute(data: IListMusicsRequestDTO) {
    const musics = await this.playlistsRepository.listMusics(data.playlistId)
    
    return musics
  }
}