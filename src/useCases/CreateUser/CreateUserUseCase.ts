import { IUsersRepository } from "../../repositories/IUsersRepository"
import { ICreateUserRequestDTO } from "./CreateUserDTO"
import { IMailProvider } from "../../providers/IMailProvider"
import { IJwtLibrary } from "../../libraries/IJwtLibrary"
import User from "../../entities/User"

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private jwtLibrary: IJwtLibrary
  ) {}
  
  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    
    if (userAlreadyExists) {
      throw new Error("O usuário já existe.")
    }
    
    const user = new User(data)
    
    await this.usersRepository.save(user)
    
    const token = this.jwtLibrary.generateToken(user.id)
    
    return { token }
  }
}