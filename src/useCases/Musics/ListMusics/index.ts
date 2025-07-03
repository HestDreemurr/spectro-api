import { SupabaseMusicsRepository } from "@/repositories/implementations/SupabaseMusicsRepository"
import { ListMusicsUseCase } from "./ListMusicsUseCase"
import { ListMusicsController } from "./ListMusicsController"

const musicsRepository = new SupabaseMusicsRepository()

const listMusicsUseCase = new ListMusicsUseCase(musicsRepository)

const listMusicsController = new ListMusicsController(listMusicsUseCase)

export { listMusicsController }