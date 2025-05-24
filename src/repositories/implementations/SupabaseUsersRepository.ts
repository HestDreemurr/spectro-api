import { IUsersRepository } from "../IUsersRepository"
import User from "../../entities/User"
import { supabase } from "../supabase"

export class SupabaseUsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("email", email)
      
    if (error) {
      throw error
    }
      
    return data[0]
  }
  
  async save(user: User): Promise<void> {
    const { error } = await supabase
      .from("users")
      .insert(user)
      
    if (error) {
      throw error
    }
  }
}