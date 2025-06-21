import { IUsersRepository } from "../../repositories/IUsersRepository"
import { IDeleteUserRequestDTO } from "./DeleteUserDTO"

export class DeleteUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}
  
  async execute({ userId }: IDeleteUserRequestDTO) {
    await this.usersRepository.delete(userId)
  }
}