import { SupabaseUsersRepository } from "../../repositories/implementations/SupabaseUsersRepository"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { CreateUserController } from "./CreateUserController"

const supabaseUsersRepository = new SupabaseUsersRepository()

const createUserUseCase = new CreateUserUseCase(supabaseUsersRepository)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }