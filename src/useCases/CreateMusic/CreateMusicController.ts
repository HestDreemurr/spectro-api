import { CreateMusicUseCase } from "./CreateMusicUseCase"
import { CreateMusicSchema } from "../../libraries/ZodSchemas"
import { Request, Response } from "express"

export class CreateMusicController {
  constructor(
    private createMusicUseCase: CreateMusicUseCase
  ) {}
  
  async handle(request: Request, response: Response) {
    const body = CreateMusicSchema.safeParse({
      title: request.body?.title,
      user_id: request.userId
    })
    
    if (!body.success) {
      return response.status(400).json({
        message: body.error.errors[0].message
      })
    }
    
    try {
      await this.createMusicUseCase.execute(body.data, request.file)
      
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}