import { IMusicsRepository } from "@/repositories/IMusicsRepository"
import { File } from "@/repositories/IMusicsRepository"
import { ICreateMusicRequestDTO } from "./CreateMusicDTO"
import Music from "@/entities/Music"

export class CreateMusicUseCase {
  constructor(
    private musicsRepository: IMusicsRepository
  ) {}
  
  async execute(data: ICreateMusicRequestDTO, musicFile: File) {
    const music_url = await this.musicsRepository.upload(musicFile)
    
    const music = new Music({
      ...data,
      music_url
    })
    
    await this.musicsRepository.create(music)
  }
}