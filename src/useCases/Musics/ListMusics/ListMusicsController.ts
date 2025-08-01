import { ListMusicsUseCase } from "./ListMusicsUseCase"
import { Request, Response } from "express"

export class ListMusicsController {
  constructor(
    private listMusicsUseCase: ListMusicsUseCase
  ) {}
  
  async handle(request: Request, response: Response) {
    try {
      const data = await this.listMusicsUseCase.execute()
      
      return response.status(200).json(data)
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}