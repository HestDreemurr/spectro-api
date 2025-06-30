import "dotenv/config"
import jwt from "jsonwebtoken"

const secretKey = process.env.JWT_SECRET_KEY

export function generateToken(userId: string) {
  const token = jwt.sign({ userId }, secretKey, { expiresIn: "30d" })
  return token
}

export function validateToken(token: string) {
  try {
    const payload = jwt.verify(token, secretKey)
    return payload
  } catch {
    return undefined
  }
}