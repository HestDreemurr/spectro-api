import { IMusicsRepository } from "@/repositories/IMusicsRepository"
import { IUnlikeMusicRequestDTO } from "./UnlikeMusicDTO"

export class UnlikeMusicUseCase {
  constructor(
    private musicsRepository: IMusicsRepository
  ) {}
  
  async execute(data: IUnlikeMusicRequestDTO) {
    await this.musicsRepository.unlike(data)
  }
}