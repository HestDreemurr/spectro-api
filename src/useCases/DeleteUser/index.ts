import { SupabaseUsersRepository } from "../../repositories/implementations/SupabaseUsersRepository"
import { DeleteUserUseCase } from "./DeleteUserUseCase"
import { DeleteUserController } from "./DeleteUserController"

const usersRepository = new SupabaseUsersRepository()

const deleteUserUseCase = new DeleteUserUseCase(usersRepository)

const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserController }