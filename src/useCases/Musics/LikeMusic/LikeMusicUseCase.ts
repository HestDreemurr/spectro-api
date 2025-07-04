import { IMusicsRepository } from "@/repositories/IMusicsRepository"
import { ILikeMusicRequestDTO } from "./LikeMusicDTO"

export class LikeMusicUseCase {
  constructor(
    private musicsRepository: IMusicsRepository
  ) {}
  
  async execute(data: ILikeMusicRequestDTO) {
    await this.musicsRepository.like(data)
  }
}