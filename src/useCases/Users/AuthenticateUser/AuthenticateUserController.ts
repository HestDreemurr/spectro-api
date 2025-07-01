import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"
import { Request, Response } from "express"
import { AuthenticateUserSchema } from "@/libraries/zod"

export class AuthenticateUserController {
  constructor(
    private authenticateUserUseCase: AuthenticateUserUseCase
  ) {}
  
  async handle(request: Request, response: Response) {
    const body = AuthenticateUserSchema.safeParse(request.body)
    
    if (!body.success) {
      return response.status(400).json({
        message: body.error.errors[0].message
      })
    }
    
    try {
      const { token } = await this.authenticateUserUseCase.execute(body.data)
      return response.status(200).json({ token })
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}