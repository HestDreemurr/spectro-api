import { LikedMusicsUseCase } from "./LikedMusicsUseCase"
import { Request, Response } from "express"

export class LikedMusicsController {
  constructor(
    private likedMusicsUseCase: LikedMusicsUseCase
  ) {}
  
  async handle(request: Request, response: Response) {
    const userId = request.userId
    
    try {
      const data = await this.likedMusicsUseCase.execute({ userId })
      
      return response.status(200).json(data)
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}