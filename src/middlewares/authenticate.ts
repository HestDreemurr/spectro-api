import { Request, Response, NextFunction } from "express"
import { validateToken } from "../libraries/jwt"

export function authenticateUser(request: Request, response: Response, next: NextFunction) {
  const token = request.headers.authorization?.split(" ")[1]
  
  if (!token) {
    return response.status(400).json({
      message: "Token ausente."
    })
  }
  
  const validToken = validateToken(token)
  
  if (!validToken) {
    return response.status(400).json({
      message: "Token inválido."
    })
  }
  
  request.userId = validToken.userId
  next()
}