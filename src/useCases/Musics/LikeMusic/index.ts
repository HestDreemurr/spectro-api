import { SupabaseMusicsRepository } from "@/repositories/implementations/SupabaseMusicsRepository"
import { LikeMusicUseCase } from "./LikeMusicUseCase"
import { LikeMusicController } from "./LikeMusicController"

const musicsRepository = new SupabaseMusicsRepository()

const likeMusicUseCase = new LikeMusicUseCase(musicsRepository)

const likeMusicController = new LikeMusicController(likeMusicUseCase)

export { likeMusicController }