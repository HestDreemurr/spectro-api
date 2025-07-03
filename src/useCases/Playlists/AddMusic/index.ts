import { SupabasePlaylistsRepository } from "@/repositories/implementations/SupabasePlaylistsRepository"
import { AddMusicUseCase } from "./AddMusicUseCase"
import { AddMusicController } from "./AddMusicController"

const playlistsRepository = new SupabasePlaylistsRepository()

const addMusicUseCase = new AddMusicUseCase(playlistsRepository)

const addMusicController = new AddMusicController(addMusicUseCase)

export { addMusicController }