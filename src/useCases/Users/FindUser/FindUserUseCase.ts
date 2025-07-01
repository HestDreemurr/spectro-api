import { IUsersRepository } from "@/repositories/IUsersRepository"
import { IFindUserRequestDTO } from "./FindUserDTO"

export class FindUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}
  
  async execute({ userId }: IFindUserRequestDTO) {
    const user = await this.usersRepository.findById(userId)
    
    if (!user) {
      throw new Error("Usuário não encontrado.")
    }
    
    return user
  }
}