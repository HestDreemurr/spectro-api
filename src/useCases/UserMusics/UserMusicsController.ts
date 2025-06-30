import { UserMusicsUseCase } from "./UserMusicsUseCase"
import { Request, Response } from "express"

export class UserMusicsController {
  constructor(
    private userMusicsUseCase: UserMusicsUseCase
  ) {}
  
  async handle(request: Request, response: Response) {
    const userId = request.query?.userId ?? request.userId
    
    try {
      const data = await this.userMusicsUseCase.execute({ userId })
      
      return response.status(200).json(data)
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}