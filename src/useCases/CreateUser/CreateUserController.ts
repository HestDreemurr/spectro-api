import { Request, Response } from "express"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { CreateUserSchema } from "../../libraries/ZodSchemas"

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    const body = CreateUserSchema.safeParse(request.body)
    
    if (!body.success) {
      return response.status(400).json({
        message: body.error.errors[0].message
      })
    }
    
    try {
      const { token } = await this.createUserUseCase.execute(body.data)
      
      return response.status(201).json({ token })
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}