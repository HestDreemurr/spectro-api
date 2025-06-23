import { IUsersRepository } from "../../repositories/IUsersRepository"
import { IJwtLibrary } from "../../libraries/IJwtLibrary"
import { AuthenticateUserRequestDTO } from "./AuthenticateUserDTO"
import { compare } from "bcryptjs"

export class AuthenticateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private jwtLibrary: IJwtLibrary
  ) {}
  
  async execute(data: AuthenticateUserRequestDTO) {
    const user = await this.usersRepository.findByEmail(data.email)
    
    if (!user) {
      throw new Error("O usuário não existe.")
    }
    
    const isPasswordValid = await compare(data.password, user.password)
    
    if (!isPasswordValid) {
      throw new Error("Credenciais invalidas.")
    }
    
    const token = this.jwtLibrary.generateToken(user.id)
    
    return { token }
  }
}