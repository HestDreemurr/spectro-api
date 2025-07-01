import { FindUserUseCase } from "./FindUserUseCase"
import { Request, Response } from "express"

export class FindUserController {
  constructor(
    private findUserUseCase: FindUserUseCase
  ) {}
  
  async handle(request: Request, response: Response) {
    const userId = request.query?.id ?? request.userId
    
    try {
      const user = await this.findUserUseCase.execute({ userId })
      
      return response.status(200).json(user)
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}