import { IMusicsRepository } from "../../repositories/IMusicsRepository"
import { ISearchMusicRequestDTO } from "./SearchMusicDTO"

export class SearchMusicUseCase {
  constructor(
    private musicsRepository: IMusicsRepository
  ) {}
  
  async execute(data: ISearchMusicRequestDTO) {
    const musics = await this.musicsRepository.search(data.query)
    
    return musics
  }
}