import { SupabaseUsersRepository } from "@/repositories/implementations/SupabaseUsersRepository"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"
import { AuthenticateUserController } from "./AuthenticateUserController"

const usersRepository = new SupabaseUsersRepository()

const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository)

const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase)

export { authenticateUserController }