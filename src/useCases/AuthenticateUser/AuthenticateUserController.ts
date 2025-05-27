import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"
import { Request, Response } from "express"

export class AuthenticateUserController {
  constructor(
    private authenticateUserUseCase: AuthenticateUserUseCase
  ) {}
  
  async handle(request: Request, response: Response) {
    const { email, password } = request.body
    
    try {
      const { token } = await this.authenticateUserUseCase.execute({
        email,
        password
      })
      return response.status(200).json({ token })
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}