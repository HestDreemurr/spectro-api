import { SupabaseUsersRepository } from "../../repositories/implementations/SupabaseUsersRepository"
import { JwtLibrary } from "../../libraries/implementations/JwtLibrary"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"
import { AuthenticateUserController } from "./AuthenticateUserController"

const usersRepository = new SupabaseUsersRepository()
const jwtLibrary = new JwtLibrary()

const authenticateUserUseCase = new AuthenticateUserUseCase(
  usersRepository,
  jwtLibrary
)

const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase)

export { authenticateUserController }