import bcrypt from "bcryptjs"
import { IBcryptLibrary } from "../IBcryptLibrary"

export class BcryptLibrary implements IBcryptLibrary {
  static hash(password: string): string {
    if (!password) return
    
    const salt = bcrypt.genSaltSync(10)
    const hashText = bcrypt.hashSync(password, salt)
    return hashText
  }
}