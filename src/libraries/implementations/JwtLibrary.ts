import "dotenv/config"
import { IJwtLibrary } from "../IJwtLibrary"
import jwt from "jsonwebtoken"

const secretKey = process.env.JWT_SECRET_KEY

export class JwtLibrary implements IJwtLibrary {
  generateToken(userId: string): string {
    const token = jwt.sign({ userId }, secretKey, { expiresIn: "30d" })
    return token
  }
  
  validateToken(token: string): boolean {
    
  }
}