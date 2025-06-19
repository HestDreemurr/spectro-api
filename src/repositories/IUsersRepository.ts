import User from "../entities/User"

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>,
  findById(id: string): Promise<Omit<User, "password">>,
  save(user: User): Promise<void>,
  update(id: string, user: Partial<User>): Promise<User | void>,
  delete(userId: string): Promise<void>
}