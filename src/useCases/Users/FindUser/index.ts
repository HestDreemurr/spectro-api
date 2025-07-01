import { SupabaseUsersRepository } from "@/repositories/implementations/SupabaseUsersRepository"
import { FindUserUseCase } from "./FindUserUseCase"
import { FindUserController } from "./FindUserController"

const usersRepository = new SupabaseUsersRepository()

const findUserUseCase = new FindUserUseCase(usersRepository)

const findUserController = new FindUserController(findUserUseCase)

export { findUserController }