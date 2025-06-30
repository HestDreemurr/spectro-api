import { Request, Response } from "express"
import { UpdateUserUseCase } from "./UpdateUserUseCase"
import { UpdateUserSchema } from "../../libraries/zod"
import { hash } from "../../libraries/bcrypt"

export class UpdateUserController {
  constructor(
    private updateUserUseCase: UpdateUserUseCase
  ) {}
  
  async handle(request: Request, response: Response) {
    const body = UpdateUserSchema.safeParse({
      id: request.userId,
      ...request.body,
      password: hash(request.body.password)
    })
    
    console.log(body)
    
    if (!body.success) {
      return response.status(400).json({
        message: body.error.errors[0].message
      })
    }
    
    try {
      await this.updateUserUseCase.execute(body.data)
      
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado.",
      })
    }
  }
}