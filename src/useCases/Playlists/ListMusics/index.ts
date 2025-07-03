import { SupabasePlaylistsRepository } from "@/repositories/implementations/SupabasePlaylistsRepository"
import { ListMusicsUseCase } from "./ListMusicsUseCase"
import { ListMusicsController } from "./ListMusicsController"

const playlistsRepository = new SupabasePlaylistsRepository()

const listMusicsUseCase = new ListMusicsUseCase(playlistsRepository)

const listMusicsController = new ListMusicsController(listMusicsUseCase)

export { listMusicsController } 