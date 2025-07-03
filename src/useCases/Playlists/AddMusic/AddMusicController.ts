import { AddMusicUseCase } from "./AddMusicUseCase"
import { Request, Response } from "express"
import { AddMusicSchema } from "@/libraries/zod"

export class AddMusicController {
  constructor(
    private addMusicUseCase: AddMusicUseCase
  ) {}
  
  async handle(request: Request, response: Response) {
    const body = AddMusicSchema.safeParse({
      playlist_id: request.params.playlist,
      music_id: request.params.music
    })
    
    if (!body.success) {
      return response.status(400).json({
        message: body.error.errors[0].message
      })
    }
    
    try {
      await this.addMusicUseCase.execute(body.data)
      
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}