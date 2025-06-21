import { IUsersRepository } from "../../repositories/IUsersRepository"
import { IUpdateUserRequestDTO } from "./UpdateUserDTO"

export class UpdateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}
  
  async execute(user: IUpdateUserRequestDTO) {
    const updatedUser = await this.usersRepository.update(user.id, user)
    
    if (!updatedUser) {
      throw new Error("Usuário não encontrado.")
    }
  }
}