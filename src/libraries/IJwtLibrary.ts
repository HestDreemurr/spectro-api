export interface IJwtLibrary {
  generateToken(userId: string): string,
  validateToken(token: string): boolean
}