import { uuid } from "uuidv4"
import bcrypt from "bcryptjs"
import { BcryptLibrary } from "../libraries/implementations/BcryptLibrary"

export default class User {
  public readonly id: string
  
  public name: string
  public email: string
  public password: string
  
  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
    
    this.password = BcryptLibrary.hash(props.password)
  }
}