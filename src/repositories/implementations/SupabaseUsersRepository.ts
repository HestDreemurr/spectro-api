import { IUsersRepository } from "../IUsersRepository"
import User from "../../entities/User"
import { supabase } from "./supabase"

export class SupabaseUsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("email", email)
      
    if (error) throw error
    
    return data[0]
  }
  
  async findById(id: string): Promise<Omit<User, "password">> {
    const { data, error } = await supabase
      .from("users")
      .select(`
        id,
        name,
        email
      `)
      .eq("id", id)
      
    if (error) throw error
    
    return data[0]
  }
  
  async save(user: User): Promise<void> {
    const { error } = await supabase
      .from("users")
      .insert(user)
      
    if (error) throw error
  }
  
  async update(id: string, user: Partial<User>): Promise<User | void> {
    const { data, error } = await supabase
      .from("users")
      .update(user)
      .eq("id", id)
      .select()
      
    if (error) throw error
    
    if (data) return data[0]
  }
  
  async delete(userId: string): Promise<void> {
    const { error } = await supabase
      .from("users")
      .delete()
      .eq("id", userId)
      
    if (error) throw error
  }
}