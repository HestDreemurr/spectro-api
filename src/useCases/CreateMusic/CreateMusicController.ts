import { CreateMusicUseCase } from "./CreateMusicUseCase"
import { Request, Response } from "express"

export class CreateMusicController {
  constructor(
    private createMusicUseCase: CreateMusicUseCase
  ) {}
  
  async handle(request: Request, response: Response) {
    try {
      await this.createMusicUseCase.execute({
        title: request.body.title,
        user_id: request.userId
      }, request.file)
      
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}