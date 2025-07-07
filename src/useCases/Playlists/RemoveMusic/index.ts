import { SupabasePlaylistsRepository } from "@/repositories/implementations/SupabasePlaylistsRepository"
import { RemoveMusicUseCase } from "./RemoveMusicUseCase"
import { RemoveMusicController } from "./RemoveMusicController"

const musicsRepository = new SupabasePlaylistsRepository()

const removeMusicUseCase = new RemoveMusicUseCase(musicsRepository)

const removeMusicController = new RemoveMusicController(removeMusicUseCase)

export { removeMusicController }