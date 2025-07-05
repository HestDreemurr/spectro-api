import { UnlikeMusicUseCase } from "./UnlikeMusicUseCase"
import { Request, Response } from "express"
import { LikeMusicSchema } from "@/libraries/zod"

export class UnlikeMusicController {
  constructor(
    private unlikeMusicUseCase: UnlikeMusicUseCase
  ) {}
  
  async handle(request: Request, response: Response) {
    const body = LikeMusicSchema.safeParse({
      user_id: request.userId,
      music_id: request.params.music
    })
    
    if (!body.success) {
      return response.status(400).json({
        message: body.error.errors[0].message
      })
    }
    
    try {
      await this.unlikeMusicUseCase.execute(body.data)
      
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}