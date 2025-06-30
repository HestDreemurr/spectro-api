import bcrypt from "bcryptjs"

export function hash(password: string): string {
  if (!password) return
  
  const salt = bcrypt.genSaltSync(10)
  const hashText = bcrypt.hashSync(password, salt)
  
  return hashText
}