import { IMusicsRepository } from "@/repositories/IMusicsRepository"
import { ILikedMusicsRequestDTO } from "./LikedMusicsDTO"

export class LikedMusicsUseCase {
  constructor(
    private musicsRepository: IMusicsRepository
  ) {}
  
  async execute(data: ILikedMusicsRequestDTO) {
    const musics = await this.musicsRepository.listLikedMusics(data.userId)
    
    return musics
  }
}