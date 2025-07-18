import { SupabaseUsersRepository } from "@/repositories/implementations/SupabaseUsersRepository"
import { BcryptLibrary } from "@/libraries/implementations/BcryptLibrary"
import { UpdateUserUseCase } from "./UpdateUserUseCase"
import { UpdateUserController } from "./UpdateUserController"

const usersRepository = new SupabaseUsersRepository()

const updateUserUseCase = new UpdateUserUseCase(usersRepository)

const updateUserController = new UpdateUserController(updateUserUseCase)

export { updateUserController }