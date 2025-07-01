import { Request, Response } from "express"
import { DeleteUserUseCase } from "./DeleteUserUseCase"

export class DeleteUserController {
  constructor(
    private deleteUserUseCase: DeleteUserUseCase
  ) {}
  
  async handle(request: Request, response: Response) {
    try {
      await this.deleteUserUseCase.execute({ userId: request.userId })
    
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}