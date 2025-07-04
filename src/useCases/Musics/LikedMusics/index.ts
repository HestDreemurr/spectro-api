import { SupabaseMusicsRepository } from "@/repositories/implementations/SupabaseMusicsRepository"
import { LikedMusicsUseCase } from "./LikedMusicsUseCase"
import { LikedMusicsController } from "./LikedMusicsController"

const musicsRepository = new SupabaseMusicsRepository()

const likedMusicsUseCase = new LikedMusicsUseCase(musicsRepository)

const likedMusicsController = new LikedMusicsController(likedMusicsUseCase)

export { likedMusicsController }