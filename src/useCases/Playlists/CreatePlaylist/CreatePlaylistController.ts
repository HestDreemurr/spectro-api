import { CreatePlaylistUseCase } from "./CreatePlaylistUseCase"
import { Request, Response } from "express"
import { CreatePlaylistSchema } from "@/libraries/zod"

export class CreatePlaylistController {
  constructor(
    private createPlaylistUseCase: CreatePlaylistUseCase
  ) {}
  
  async handle(request: Request, response: Response) {
    const body = CreatePlaylistSchema.safeParse({
      title: request.body?.title,
      user_id: request.userId
    })
    
    if (!body.success) {
      return response.status(400).json({
        message: body.error.errors[0].message
      })
    }
    
    try {
      await this.createPlaylistUseCase.execute(body.data)
      
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}