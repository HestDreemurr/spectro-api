import { RemoveMusicUseCase } from "./RemoveMusicUseCase"
import { AddMusicSchema } from "@/libraries/zod"
import { Request, Response } from "express"

export class RemoveMusicController {
  constructor(
    private removeMusicUseCase: RemoveMusicUseCase
  ) {}
  
  async handle(request: Request, response: Reponse) {
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
      await this.removeMusicUseCase.execute(body.data)
      
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}