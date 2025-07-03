import { UserPlaylistsUseCase } from "./UserPlaylistsUseCase"
import { Request, Response } from "express"

export class UserPlaylistsController {
  constructor(
    private userPlaylistsUseCase: UserPlaylistsUseCase
  ) {}
  
  async handle(request: Request, response: Response) {
    const userId = request.query?.userId ?? request.userId
    
    try {
      const data = await this.userPlaylistsUseCase.execute({ userId })
      
      return response.status(200).json(data)
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}