import { SupabaseMusicsRepository } from "@/repositories/implementations/SupabaseMusicsRepository"
import { SearchMusicUseCase } from "./SearchMusicUseCase"
import { SearchMusicController } from "./SearchMusicController"

const musicsRepository = new SupabaseMusicsRepository()

const searchMusicUseCase = new SearchMusicUseCase(musicsRepository)

const searchMusicController = new SearchMusicController(searchMusicUseCase)

export { searchMusicController }