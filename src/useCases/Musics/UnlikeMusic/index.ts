import { SupabaseMusicsRepository } from "@/repositories/implementations/SupabaseMusicsRepository"
import { UnlikeMusicUseCase } from "./UnlikeMusicUseCase"
import { UnlikeMusicController } from "./UnlikeMusicController"

const musicsRepository = new SupabaseMusicsRepository()

const unlikeMusicUseCase = new UnlikeMusicUseCase(musicsRepository)

const unlikeMusicController = new UnlikeMusicController(unlikeMusicUseCase)

export { unlikeMusicController }