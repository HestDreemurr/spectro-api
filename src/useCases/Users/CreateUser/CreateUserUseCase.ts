import { IUsersRepository } from "@/repositories/IUsersRepository"
import { ICreateUserRequestDTO } from "./CreateUserDTO"
import { generateToken } from "@/libraries/jwt"
import User from "@/entities/User"
import { IMailProvider } from "@/providers/IMailProvider"

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}
  
  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    
    if (userAlreadyExists) {
      throw new Error("O usuário já existe.")
    }
    
    const user = new User(data)
    
    await this.usersRepository.save(user)
    
    await this.mailProvider.sendMail({
      to: data.email,
      subject: "Seja bem-vindo ao Spectro!",
      body: "<p>Seja bem-vindo ao Spectro. Aproveite nossas músicas!</p>"
    })
    
    const token = generateToken(user.id)
    
    return { token }
  }
}