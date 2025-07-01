import { SupabaseMusicsRepository } from "@/repositories/implementations/SupabaseMusicsRepository"
import { UserMusicsUseCase } from "./UserMusicsUseCase"
import { UserMusicsController } from "./UserMusicsController"

const musicsRepository = new SupabaseMusicsRepository()

const userMusicsUseCase = new UserMusicsUseCase(musicsRepository)

const userMusicsController = new UserMusicsController(userMusicsUseCase)

export { userMusicsController }