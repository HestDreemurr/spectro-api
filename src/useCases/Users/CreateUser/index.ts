import { SupabaseUsersRepository } from "@/repositories/implementations/SupabaseUsersRepository"
import { MailtrapMailProvider } from "@/providers/implementations/MailtrapMailProvider"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { CreateUserController } from "./CreateUserController"

const supabaseUsersRepository = new SupabaseUsersRepository()
const mailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(supabaseUsersRepository, mailProvider)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }