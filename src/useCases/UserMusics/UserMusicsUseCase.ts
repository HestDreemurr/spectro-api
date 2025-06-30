import { IMusicsRepository } from "../../repositories/IMusicsRepository"
import { IUserMusicsRequestDTO } from "./UserMusicsDTO"

export class UserMusicsUseCase {
  constructor(
    private musicsRepository: IMusicsRepository
  ) {}
  
  async execute(data: IUserMusicsRequestDTO) {
    const musics = await this.musicsRepository.getUserMusics(data.userId)
    
    return musics
  }
}