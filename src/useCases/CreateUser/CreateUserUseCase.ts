import { IUsersRepository } from "../../repositories/IUsersRepository"
import { ICreateUserRequestDTO } from "./CreateUserDTO"
import { IMailProvider } from "../../providers/IMailProvider"
import { IJwtLibrary } from "../../libraries/IJwtLibrary"
import User from "../../entities/User"

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
    private jwtLibrary: IJwtLibrary
  ) {}
  
  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    
    if (userAlreadyExists) {
      throw new Error("O usuário já existe.")
    }
    
    const user = new User(data)
    
    await this.usersRepository.save(user)
    
    await this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email
      },
      from: {
        name: "Spectro",
        email: "spectro@app.com"
      },
      subject: "Seja bem-vindo ao Spectro!",
      body: "<p>Seja bem-vindo ao Spectro! Aproveite nossas músicas!</p>"
    })
    
    const token = this.jwtLibrary.generateToken(user.id)
    
    return { token }
  }
}