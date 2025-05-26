import { SupabaseUsersRepository } from "../../repositories/implementations/SupabaseUsersRepository"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { CreateUserController } from "./CreateUserController"
import { JwtLibrary } from "../../libraries/implementations/JwtLibrary"

const supabaseUsersRepository = new SupabaseUsersRepository()
const jwtLibrary = new JwtLibrary()

const createUserUseCase = new CreateUserUseCase(
  supabaseUsersRepository,
  jwtLibrary
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }