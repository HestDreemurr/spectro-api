import { uuid } from "uuidv4"
import bcrypt from "bcryptjs"

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
    
    const salt = bcrypt.genSaltSync(10)
    this.password = bcrypt.hashSync(props.password, salt)
  }
}