import { IMusicsRepository } from "@/repositories/IMusicsRepository"

export class ListMusicsUseCase {
  constructor(
    private musicsRepository: IMusicsRepository
  ) {}
  
  async execute() {
    const data = await this.musicsRepository.list()
    
    return data
  }
}