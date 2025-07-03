import { SupabasePlaylistsRepository } from "@/repositories/implementations/SupabasePlaylistsRepository"
import { UserPlaylistsUseCase } from "./UserPlaylistsUseCase"
import { UserPlaylistsController } from "./UserPlaylistsController"

const playlistsRepository = new SupabasePlaylistsRepository()

const userPlaylistsUseCase = new UserPlaylistsUseCase(playlistsRepository)

const userPlaylistsController = new UserPlaylistsController(userPlaylistsUseCase)

export { userPlaylistsController }