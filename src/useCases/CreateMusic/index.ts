import { SupabaseMusicsRepository } from "../../repositories/implementations/SupabaseMusicsRepository"
import { CreateMusicUseCase } from "./CreateMusicUseCase"
import { CreateMusicController } from "./CreateMusicController"

const musicsRepository = new SupabaseMusicsRepository()

const createMusicUseCase = new CreateMusicUseCase(musicsRepository)

const createMusicController = new CreateMusicController(createMusicUseCase)

export { createMusicController }