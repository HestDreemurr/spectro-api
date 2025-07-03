import { SupabasePlaylistsRepository } from "@/repositories/implementations/SupabasePlaylistsRepository"
import { CreatePlaylistUseCase } from "./CreatePlaylistUseCase"
import { CreatePlaylistController } from "./CreatePlaylistController"

const playlistsRepository = new SupabasePlaylistsRepository()

const createPlaylistUseCase = new CreatePlaylistUseCase(playlistsRepository)

const createPlaylistController = new CreatePlaylistController(createPlaylistUseCase)

export { createPlaylistController }