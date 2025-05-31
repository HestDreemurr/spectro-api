import User from "../entities/User"

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>,
  save(user: User): Promise<void>,
  update(user: { name?: string, email?: string, password?: string }): Promise<void>
}